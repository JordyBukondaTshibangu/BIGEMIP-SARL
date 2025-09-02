"use client";

import Button from "@/components/atoms/button";
import Feedback from "@/components/atoms/feedback";
import { zodResolver } from "@hookform/resolvers/zod";
import * as motion from "motion/react-client";
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

  const formFields = [
    { name: "name", type: "text", placeholder: "Votre Nom..." },
    { name: "email", type: "text", placeholder: "Votre Email..." },
    { name: "subject", type: "text", placeholder: "Sujet..." },
  ];

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

      console.log("Response:", response);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Something went wrong on the server."
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
    <section className="w-full mx-auto flex flex-col gap-36 px-5 py-20 ">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto w-full flex flex-col gap-10"
      >
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-normal leading-10 text-gray-500">
            Une question, un besoin ? Remplissez le formulaire de contact
            ci-dessous. Nous reviendrons vers vous dans les plus brefs délais.
          </p>
        </div>

        <div className="flex flex-col gap-14 md:gap-24 w-full md:w-1/2">
          <motion.h3
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl text-black font-bold italic"
          >
            {/* Votre email a ete envoyé */}
          </motion.h3>

          {submissionStatus === "success" && (
            <Feedback
              message="Message envoyé"
              type="success"
              onClose={handleClosePopup}
            />
          )}

          {submissionStatus === "error" && (
            <Feedback
              message="Une erreur est survenue"
              type="error"
              onClose={handleClosePopup}
            />
          )}

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8 text-black"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            {formFields.map((field, idx) => (
              <div key={idx} className="w-full flex flex-col gap-1">
                <input
                  key={idx}
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.name as keyof ContactFormInputs)}
                  disabled={isSubmitting}
                  className="border-0 border-b border-gray-300 h-10 outline-none text-[#7A7A7A] px-2"
                />
                {errors[field.name as keyof ContactFormInputs] && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors[field.name as keyof ContactFormInputs]?.message}
                  </p>
                )}
              </div>
            ))}

            <textarea
              placeholder="Votre Message..."
              {...register("message")}
              className="border-0 border-b border-gray-300 h-40 outline-none text-[#7A7A7A] px-2"
            />

            <div className="flex justify-start w-fit">
              <Button
                type="submit"
                disabled={isSubmitting}
                buttonText={isSubmitting ? "Envoi en cours..." : "Envoyer"}
              />
            </div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}

export default BGPContactForm;
