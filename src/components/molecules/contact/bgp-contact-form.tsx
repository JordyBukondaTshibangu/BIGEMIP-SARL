"use client";

import Button from "@/components/atoms/button";
import Feedback from "@/components/atoms/feedback";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name is required")
    .max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address"),
  subject: z
    .string()
    .trim()
    .min(3, "Subject is required")
    .max(200, "Subject is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

function BGPContactForm() {
  const t = useTranslations("ContactUs");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const ui = useTranslations("UI.contact");

  const formFields = [
    {
      name: "name",
      type: "text",
      autoComplete: "name",
      label: ui("labels.name"),
    },
    {
      name: "email",
      type: "email",
      autoComplete: "email",
      label: ui("labels.email"),
    },
    {
      name: "subject",
      type: "text",
      autoComplete: "off",
      label: ui("labels.subject"),
    },
  ] as const;

  const inputClass =
    "w-full rounded-[3px] border border-ink/20 bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-ink focus:ring-2 focus:ring-ore/60 disabled:opacity-60 aria-[invalid=true]:border-laterite";

  const handleFormSubmit = async (data: ContactFormInputs) => {
    setSubmissionStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Something went wrong on the server.",
        );
      }

      setSubmissionStatus("success");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionStatus("error");
    }
  };

  const handleClosePopup = () => setSubmissionStatus("idle");

  return (
    <div className="flex flex-col gap-8 rounded-[3px] border border-ink/10 bg-white p-6 shadow-[0_30px_60px_-40px_rgb(31_29_51/0.45)] md:p-10">
      <h2 className="type-title text-[1.6rem] md:text-[1.9rem]">
        {ui("form_title")}
      </h2>

      {submissionStatus === "success" && (
        <Feedback
          message={t("form.feedback.success")}
          type="success"
          onClose={handleClosePopup}
          dismissLabel={ui("dismiss")}
        />
      )}
      {submissionStatus === "error" && (
        <Feedback
          message={ui("error_fallback")}
          type="error"
          onClose={handleClosePopup}
          dismissLabel={ui("dismiss")}
        />
      )}

      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(handleFormSubmit)}
        noValidate
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {formFields.map((field) => {
            const error = errors[field.name];
            return (
              <div
                key={field.name}
                className={`flex flex-col gap-2 ${field.name === "subject" ? "sm:col-span-2" : ""}`}
              >
                <label
                  htmlFor={`contact-${field.name}`}
                  className="text-[0.95rem] font-medium"
                >
                  {field.label}
                </label>
                <input
                  id={`contact-${field.name}`}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  disabled={isSubmitting}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={
                    error ? `contact-${field.name}-error` : undefined
                  }
                  {...register(field.name)}
                  className={inputClass}
                />
                {error && (
                  <p
                    id={`contact-${field.name}-error`}
                    className="text-sm text-laterite"
                  >
                    {error.message}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-message"
            className="text-[0.95rem] font-medium"
          >
            {ui("labels.message")}
          </label>
          <textarea
            id="contact-message"
            rows={6}
            disabled={isSubmitting}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            {...register("message")}
            className={`${inputClass} resize-y`}
          />
          {errors.message && (
            <p id="contact-message-error" className="text-sm text-laterite">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="self-start"
          buttonText={
            isSubmitting
              ? t("form.placeholder.button_sending")
              : t("form.placeholder.button")
          }
        />
      </form>
    </div>
  );
}

export default BGPContactForm;
