import { jobInfo } from "./interfaces";

const uilist = document.getElementById("jobList") as HTMLUListElement;
const templete = document.querySelector("template") as HTMLTemplateElement;

export function updateUI(data: []) {
  data.forEach((doc: jobInfo) => {
    const clone = templete.content.cloneNode(true) as HTMLTemplateElement;
    const companyLogo = clone.querySelector(
      "#company-logo"
    ) as HTMLImageElement;
    const companyName = clone.querySelector(
      "#company-title"
    ) as HTMLParagraphElement;
    const jobTitle = clone.querySelector("#job-title") as HTMLHeadElement;
    const postedAt = clone.querySelector("#postedAt") as HTMLParagraphElement;
    const contract = clone.querySelector("#contract") as HTMLParagraphElement;
    const location = clone.querySelector("#location") as HTMLParagraphElement;
    const jobNS = clone.querySelector("#job-new-state") as HTMLParagraphElement;
    const jobFS = clone.querySelector(
      "#job-featured-state"
    ) as HTMLParagraphElement;
    const filters = clone.querySelector("#filters") as HTMLDivElement;
    const spanRole = document.createElement("span");

    const filterArr: string[] = [
      //   { role: doc.role },
      //   { level: doc.level },
      //   { languages: doc.languages },
      //   { tools: doc.tools }

      doc.role,
      doc.level,
      ...doc.languages,
      ...doc.tools,
    ];

    // textConten and appendChild
    filterArr.forEach((d: string) => {
      const spanEl = document.createElement("span") as HTMLSpanElement;
      //   const key: string = Object.keys(d)[0];
      spanEl.setAttribute("class", "news__one");
      spanEl.textContent = d;
      //   spanEl.setAttribute(`data-${key}`, d[key]);
      filters.appendChild(spanEl);
    });
    jobNS.style.display = `${doc.new ? "block" : "none"}`;
    jobFS.style.display = `${doc.featured ? "block" : "none"}`;
    companyLogo.src = doc.logo;
    companyName.textContent = doc.company;
    jobTitle.textContent = doc.position;
    postedAt.textContent = doc.postedAt;
    contract.textContent = doc.contract;
    location.textContent = doc.location;

    uilist.appendChild(clone);
  });
}
