import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
});

const Subscribe = async (req: any, res: any) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID!, {
      email_address: email,
      status: <any>"subscribed",
    });

    return res.status(201).json({ error: "" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }

  if (res.status >= 400) {
    return res.status(400).json({
      error: `There was an error subscribing to our newsletter 😟. Shoot us an email at [hi@hashtune.co] and we will add you to the list 😀`,
    });
  }
};

export default Subscribe;
