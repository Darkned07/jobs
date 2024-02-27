const uilist = document.getElementById("jobList");
const templete = document.querySelector("template");
export function updateUI(data) {
    data.forEach((doc) => {
        const clone = templete.content.cloneNode(true);
        const companyLogo = clone.querySelector("#company-logo");
        const companyName = clone.querySelector("#company-title");
        const jobTitle = clone.querySelector("#job-title");
        const postedAt = clone.querySelector("#postedAt");
        const contract = clone.querySelector("#contract");
        const location = clone.querySelector("#location");
        const jobNS = clone.querySelector("#job-new-state");
        const jobFS = clone.querySelector("#job-featured-state");
        const filters = clone.querySelector("#filters");
        const spanRole = document.createElement("span");
        const filterArr = [
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
        filterArr.forEach((d) => {
            const spanEl = document.createElement("span");
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
