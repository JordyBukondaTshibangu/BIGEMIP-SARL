import BGPContactForm from "@/components/molecules/contact/bgp-contact-form";
import BGPContactHeader from "@/components/molecules/contact/bgp-contact-header";
import BGPMap from "@/components/molecules/contact/bgp-map";

function Contact() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <BGPContactHeader />
      <BGPContactForm />
      <BGPMap />
    </div>
  );
}

export default Contact;
