<template>
    <html lang="en">
  
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </head>
  
    <body>
        <section  class="container py-2">
  
            <div id="pdf" class="border col-8" v-if="!hide">
                <div class="row p-4">
                    <div class="col-7">
                        <h1>{{ data.name }}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="col-5">
                        <p>{{ data.address }}</p>
                        <p>{{ data.phone }}</p>
                        <p>{{ data.email }}</p>
                    </div>
                </div>
                <div class="row px-4">
                    <div class="col-7">
                        <div class="experience my-5">
                            <h5 class="text-primary">EXPERIENCE</h5>
                            <p>
                                <span class="fw-bold">{{ data.experience_year }}</span><br>
                                <span class="fw-bold">{{ data.company_name }}</span> — <span class="fw-bold">{{
                                        data.job_title
                                }}</span><br>
                                <span class="fw-bold">{{ data.from }} — {{ data.to }}</span><br>
                                <span>{{ data.job_desc }}</span>
                            </p>
                        </div>
                        <div class="education my-5">
                            <h5 class="text-primary">EDUCATION</h5>
                            <p>
                                <span class="fw-bold">{{ data.college_name }}</span> <br>
                                <span>{{ data.city }}</span> — <span class="fw-bold">{{ data.degree }}</span><br>
                                <span class="fw-bold"> {{ data.from_college }} </span> — <span> {{ data.to_college
                                }}</span>
                            </p>
                        </div>
                        <div class="projects my-5">
                            <h5 class="text-primary">PROJECTS</h5>
                            <p>
                                <span class="fw-bold">{{ data.project }}</span> <br>
                                <span>{{ data.project_desc }}</span>
                            </p>
                        </div>
                        <div class="skills my-4">
                            <h5 class="text-primary">SKILLS</h5>
                            <span class="lg-lh">
                                {{ data.skill_name }}
                            </span>
                        </div>
                        <div class="awards my-4">
                            <h5 class="text-primary">AWARDS</h5>
                            <span class="lg-lh">
                                {{ data.awards }}
                            </span>
                        </div>
                        <div class="languages my-4">
                            <h5 class="text-primary">LANGUAGES</h5>
                            <span class="lg-lh">
                                {{ data.languages }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border" v-if="hide">
                <div class="row p-4">
                    <div class="col-7">
                        <h1><input class="form-control" type="text" v-model="data.name"></h1>
                        <p><input class="form-control" type="text" v-model="data.desc" /></p>
                    </div>
                    <div class="col-5">
                        <p><textarea class="form-control" type="text" placeholder="enter your address"
                                v-model="data.address"></textarea></p>
                        <p><input class="form-control" type="text" placeholder="enter your phone no."
                                v-model="data.phone" /></p>
                        <p><input class="form-control" type="email" placeholder="enter your email"
                                v-model="data.email" /></p>
                    </div>
                </div>
                <div class="row px-4">
                    <div class="col-7">
                        <div class="experience my-5">
                            <h5 class="text-primary">EXPERIENCE</h5>
                            <div>
                                <input class="form-control" type="text" placeholder="enter no. of years of experience"
                                    v-model="data.experience_year" /><br>
                                <input class="form-control" type="text" placeholder="enter company name"
                                    v-model="data.company_name" /><br>
                                <div class="row justify-content-between align-items-center mb-2">
                                    <div class="col-5">
                                        <input class="form-control" type="date" placeholder="From"
                                            v-model="data.from" />
                                    </div>
                                    <div class="col-1 text-center"> — </div>
                                    <div class="col-5">
                                        <input class="form-control" type="date" placeholder="to" v-model="data.to" />
                                    </div>
                                </div>
                                <span><input class="form-control" type="text" placeholder="job description"
                                        v-model="data.job_desc" /></span>
                            </div>
                        </div>
                        <div class="education my-5">
                            <h5 class="text-primary">EDUCATION</h5>
                            <div>
                                <span class="fw-bold"><input class="form-control" type="text"
                                        placeholder="enter college name" v-model="data.college_name" /></span> <br>
                                <div class="row justify-content-between align-items-center mb-2">
                                    <div class="col-5">
                                        <input class="form-control" type="text" placeholder="enter degree"
                                            v-model="data.degree" />
                                    </div>
                                    <div class="col-1 text-center"> — </div>
                                    <div class="col-5">
                                        <input class="form-control" type="text" placeholder="enter city name"
                                            v-model="data.city" />
                                    </div>
                                </div>
                                <div class="row justify-content-between align-items-center mb-2">
                                    <div class="col-5">
                                        <input class="form-control" type="date" placeholder="From"
                                            v-model="data.from_college" />
                                    </div>
                                    <div class="col-1 text-center"> — </div>
                                    <div class="col-5">
                                        <input class="form-control" type="date" placeholder="to"
                                            v-model="data.to_college" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="projects my-5">
                            <h5 class="text-primary">PROJECTS</h5>
                            <p>
                                <span class="fw-bold"><input class="form-control" type="text"
                                        placeholder="enter Project Name" v-model="data.project" /></span> <br>
                                <span> <input class="form-control" type="text" placeholder="enter project description"
                                        v-model="data.project_desc" /></span>
                            </p>
                        </div>
                        <div class="skills my-4">
                            <h5 class="text-primary">SKILLS ---</h5>
                            <span class="lg-lh">
                                <textarea class="form-control" type="text" placeholder="enter your skill"
                                    v-model="data.skill_name"></textarea>
                            </span>
                        </div>
                        <div class="awards my-4">
                            <h5 class="text-primary">AWARDS</h5>
                            <span class="lg-lh">
                                <textarea class="form-control" type="text" placeholder="enter your awards"
                                    v-model="data.awards"></textarea>
                            </span>
                        </div>
                        <div class="languages my-4">
                            <h5 class="text-primary">LANGUAGES</h5>
                            <span class="lg-lh">
                                <textarea class="form-control" type="text" placeholder="enter your languages"
                                    v-model="data.languages"></textarea>
                            </span>
                        </div>
                    </div>
  
                </div>
            </div>
            <button class="btn btn-primary mt-4" @click="hide = !hide">{{ !hide ? 'Edit' : 'Done' }}</button>
            <button class="btn btn-success mt-4 mx-2" @click="genPDF">Download</button>
        </section>
    </body>
  
    </html>
  </template>
  <script>
  import { ref } from 'vue'
  import html2canvas from 'html2canvas';
  import { jsPDF } from "jspdf";
  export default {
    setup() {
        // const doc = new jsPDF();
        const genPDF = () => {
            // const canv =  (canvas) => {
            //         console.log(canvas,'----------')
            //         let img = canvas.toDataURL("image/png");
            //         let doc = new jsPDF();
            //         doc.addImage(img, 'JPEG', 20, 20);
            //         doc.save('test.pdf');
            //         console.log(doc,'---------------')
            //     }
            html2canvas(document.querySelector('#pdf')).then(function (canvas) {
                console.log(canvas, '----------')
                let img = canvas.toDataURL("image/png");
                let doc = new jsPDF();
                doc.addImage(img, 'JPEG', 20, 20);
                doc.save('test.pdf');
                console.log(doc, '---------------')
            });
  
        }
        let data = ref({
            name: 'Your Name',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            address: `123 Your Street
                    Your City, ST 12345`,
            phone: '+910987654321',
            email: 'reacton.in@gmail.com',
            experience_year: '2 Years',
            company_name: 'Reacton',
            job_title: 'Job Title',
            from: '2022-12-01',
            to: 'Currently',
            degree: 'Degree',
            job_desc: 'Job Description',
            college_name: 'College Name',
            city: 'city',
            from_college: 'from',
            to_college: 'to',
            project: 'project name',
            project_desc: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    nonummy nibh.`,
            skill_name: `Lorem ipsum dolor sit amet.
                                Consectetuer adipiscing elit.
                                Sed diam nonummy nibh
                                euismod tincidunt.
                                Laoreet dolore magna
                                aliquam erat volutpat.`,
            awards: `Lorem ipsum dolor sit amet.
                                Consectetuer adipiscing elit.
                                Sed diam nonummy nibh
                                euismod tincidunt.
                                Laoreet dolore magna
                                aliquam erat volutpat.`,
            languages: `Lorem ipsum dolor sit amet.
                                Consectetuer adipiscing elit.
                                Sed diam nonummy nibh
                                euismod tincidunt.
                                Laoreet dolore magna
                                aliquam erat volutpat.`,
        })
        let hide = ref(false);
        return {
            data,
            hide,
            genPDF
        }
    }
  }
  </script>