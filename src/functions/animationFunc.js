import gsap from "gsap";

export default function AminationFunc (visibility, parentContainer, childContainer) {

    if (visibility === 1) {
        const tl = gsap.timeline();
        tl.to(parentContainer, { duration: 0.1, marginBottom: "15px" })
          .to(parentContainer, {
            duration: 0.5,
            maxHeight: `${parentContainer.scrollHeight * 2.5}px`,
          })
          .to(childContainer, { duration: 0.5, autoAlpha: 1 });
      } else if (visibility === 2) {
        const tl = gsap.timeline();
        tl.fromTo(childContainer, { autoAlpha: 1 }, { duration: 0.3, autoAlpha: 0 })
          .to(parentContainer, { duration: 0.5, maxHeight: "0px" })
          .fromTo(
            parentContainer,
            { marginBottom: "15px" },
            { duration: 0.1, marginBottom: "0px" }
          );
      }
}
