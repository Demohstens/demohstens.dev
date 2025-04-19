import SocialLink from "./socialLinke";

function SocialLinks() {
  return (
    <div className="flex">
      <SocialLink
        image="/images/discord.svg"
        alt="Discord"
        link="https://discordapp.com/users/397885433213878287"
      />
      <SocialLink
        image="/images/github.svg"
        alt="GitHub"
        link="https://github.com/Demohstens"
      />
      <SocialLink
        image="/images/mail.png"
        alt="Email"
        link="mailto:demohstens@gmail.com"
      />
      <SocialLink
        image="/images/bluesky.png"
        alt="Blueksy logo"
        link="https://bsky.app/profile/demohstens.dev"
      />
    </div>
  );
}

export default SocialLinks;
