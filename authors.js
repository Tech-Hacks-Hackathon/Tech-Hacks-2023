var menu = document.getElementById("menu");
var box = document.querySelector(".box");
var subbox = document.querySelector(".subbox");
var cancel = document.getElementById("cancel");


menu.addEventListener("click", function () {
    box.style.display = "block";
    box.style.transition = "all 1s ease-in-out";
    box.style.transform = "translatey(-20%)";
    box.style.position = "fixed";
    box.style.width = "100%";
    box.style.zIndex = "1";
});

cancel.addEventListener("click", function () {
    box.style.display = "none";
    box.style.transition = "all 1s ease-in-out";
});


var authors = [
    { name: "William Shakespeare", imageUrl: "William Shakespeare.jpg",loading:"lazy"},
    { name: "Harold Robbins", imageUrl: "harold robbins.jpg" },
    { name: "Dam Barbara", imageUrl: "Dam Barbara.jpg" },
    { name: "Agatha Christie", imageUrl: "agatha christie.jpg" },
    { name: "Gabriel Garcia Marquez", imageUrl: "Gabriel Garcia Marquez.jpg" },
    { name: "George R.R. Martin", imageUrl: "George R.R. Martin.webp" },
    { name: "Herman Melville", imageUrl: "Herman Melville.webp" },
    { name: "Virginia Woolf", imageUrl: "Virginia Woolf.webp" },
    { name: "J.R.R. Tolkien", imageUrl: "J.R.R. Tolkien.jpg" },
    { name: "Toni Morrison", imageUrl: "Toni Morrison.webp" },
    { name: "F. Scott Fitzgerald", imageUrl: "F. Scott Fitzgerald.jpg" },
    { name: "Leo Tolstoy", imageUrl: "Leo Tolstoy.jpg" },
    { name: "Homer", imageUrl: "Homer.jpg" },
    { name: "Harper Lee", imageUrl: "Harper Lee.jpg" },
    { name: "George Orwell", imageUrl: "George Orwell.webp" },
    { name: "Mark Twain", imageUrl: "Mark Twain.jpg" },
    //
    { name: "Terry Pratchett", imageUrl: "Terry Pratchett.webp" },
    { name: "Hilary Mantel", imageUrl: "Hilary Mantel.jpg" },
    { name: "Ian McEwan", imageUrl: "Ian McEwan.webp" },
    { name: "Margaret Atwood", imageUrl: "Margaret Atwood.webp" },
    { name: "Marilynne Robinson", imageUrl: "Marilynne Robinson.webp" },
    { name: "Veronica Roth", imageUrl: "Veronica Roth.jpg" },
    { name: "Colson Whitehead", imageUrl: "Colson Whitehead.jpg" },
    { name: "Kazuo Ishiguro", imageUrl: "Kazuo Ishiguro.webp" },
    { name: "Suzanne Collins", imageUrl: "Suzanne Collins.jpg" },
    { name: "Philip Roth", imageUrl: "Philip Roth.jpeg" },
    { name: "Sally Rooney", imageUrl: "Sally Rooney.webp" },
    { name: "Daniel Kahneman", imageUrl:"Kahneman-web.webp" },
    { name: "Anita Desair", imageUrl: "Anita Desai.jpg" },
    { name: "Anees Salim", imageUrl: "Anees Salim.jpg"},
    { name: "Alan Hollinghurst", imageUrl: "Alan Hollinghurst.jpg" },
    { name: "Neil Gaiman", imageUrl: "Neil Gaiman.jpg" },

    //

    { name: "Michael Chabon", imageUrl: "Michael Chabon.webp" },
    { name: "W. G. Sebald", imageUrl: "W. G. Sebald.jpg" },
    { name: "Jennifer Egan", imageUrl: "Jennifer Egan.webp" },
    { name: "Jonathan Franzen", imageUrl: "Jonathan Franzen.webp"},
    { name: "Arundhati Roy", imageUrl: "Arundhati Roy.jpg" },
    { name: "Ravi Subramanian", imageUrl: "Ravi Subramanian.jpg"},
    { name: "Vikram Seth", imageUrl: "Vikram Seth.jpg"},
    { name: "Sudha Murthy", imageUrl: "Sudha Murthy.webp" },
    { name: "Kurt Vonnegut", imageUrl: "Kurt Vonnegut.webp" },
    { name: "Amish Tripathi", imageUrl: "Amish.jpg" },
    { name: "Tom Clancy", imageUrl: "Tom Clancy.jpg" },
    { name: "Salman Rushdie", imageUrl:"Salman Rushdie.jpg" },
    { name: "Jackie Collins", imageUrl: "Jackie Collins.webp" },
    { name: "Colleen Hoover", imageUrl: "Colleen Hoover.webp"},
    { name: "Dav Pilkey", imageUrl: "Dav Pilkey.jpg" },
    { name: "Abraham Verghese", imageUrl: "Abraham Verghese.jpg" },

    //


    { name: "Dan Brown", imageUrl: "/dan brown.jpg" },
    { name: "Danielle steel", imageUrl: "/danielle steel.jpg" },
    { name: "Stephen King", imageUrl: "/Stephen-King.webp" },
    { name: "Nora Roberts", imageUrl: "/Nora-Roberts.jpg"},
    { name: "James Patterson", imageUrl: "/James Patterson.webp" },
    { name: "Nicholas Sparks", imageUrl: "/nicholas sparks.jpg"},
    { name: "Jay Shetty", imageUrl: "/Jay Shetty.jpg"},
    { name: "Robert Greene", imageUrl: "https://www.wsb.com/wp-content/uploads/2022/12/Greene_Robert_ORIGINAL-682x830.jpg?bust=83fe9f535cef0277e397794643117fce"},

    //

    { name: "Orhan Pamuk", imageUrl: "https://i.guim.co.uk/img/media/52bc310791a78ad97b04a892131369187ae0dd71/0_0_2464_1478/master/2464.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=21164ac617acdeb806e795919da904bf" },
    { name: "Haruki Murakami", imageUrl: "https://cdn.britannica.com/20/195620-050-9379EDA9/Murakami-Haruki-2012.jpg" },
    { name: "John Grisham", imageUrl: "https://api.time.com/wp-content/uploads/2023/09/john-grisham.jpg" },
    { name: "Isaac Bashevis Singer", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Isaac_Bashevis_Singer_%28Gotfryd%29.jpg"},
    { name: "D.H. Lawrence", imageUrl: "https://media.newyorker.com/photos/5f7cc3e853554a3d5c8b0e13/master/pass/wilson-d-h-lawrence.jpg" },
    { name: "Oscar Wilde", imageUrl: "https://cdn.britannica.com/21/94621-050-58D29508/Oscar-Wilde-1882.jpg"},
    
    { name: "Ta-Nehisi Coates", imageUrl: "https://npg.si.edu/sites/default/files/Atlantic/npg_2021_160_coates.jpg"},
    { name: "Elena Ferrante", imageUrl: "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1280,w_1280,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Ann_Goldstein_fznxnd.jpg" },
    { name: "Gillian Flynn", imageUrl: "https://images.mubicdn.net/images/cast_member/434965/cache-144125-1597090654/image-w856.jpg?size=800x" },
    { name: "Fredrik Backman", imageUrl:"https://m.media-amazon.com/images/M/MV5BNzc4ODk0ZWYtM2YyNy00M2Y1LTlhMGUtOTM4MjI3ZmY4YTNlL2ltYWdlXkEyXkFqcGdeQXVyNDUxMzI5NTU@._V1_.jpg"},
    { name: "Paula Hawkins", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Paula_Hawkins_G%C3%B6teborg_Book_Fair_2015.jpg" },
    { name: "Donna Tartt", imageUrl: "https://static01.nyt.com/images/2013/10/21/arts/jpTARTT/jpTARTT-superJumbo.jpg"},
    { name: "Jojo Moyes", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Paris_-_Salon_du_livre_de_Paris_2017_-_Jojo_Moyes_-_001_%28cropped%29.jpg" },
    { name: "Andy Weir", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/NASA_Journey_to_Mars_and_%E2%80%9CThe_Martian%22_%28201508180048HQ%29.jpg/1200px-NASA_Journey_to_Mars_and_%E2%80%9CThe_Martian%22_%28201508180048HQ%29.jpg" },

    //

    { name: "Rainbow Rowell", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Rainbow_Rowell_2019_Texas_Book_Festival.jpg/1200px-Rainbow_Rowell_2019_Texas_Book_Festival.jpg"},
    { name: "Rupi Kaur", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/62/Rupi_Kaur_by_Baljit_Singh.jpg" },
    { name: "Liane Moriarty", imageUrl: "https://lianemoriarty.com.au/wp-content/uploads/2021/10/LianeMoriarty_cropped.jpg" },
    { name: "Khaled Hosseini", imageUrl: "https://ew.com/thmb/Gu1Oed36UcLa62Zmyqbz7MDG0Jc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/khaled-hosseini-1-2000-60b47db3e08e482d958b0625fa2271ab.jpg"},
    { name: "Amor Towles", imageUrl: "https://literary-arts.org/wp-content/uploads/2019/12/Amor-Towles-2-credit-Bill-Hayes-scaled-e1581051791906.jpg" },
    { name: "Celeste Ng", imageUrl: "https://static01.nyt.com/images/2018/12/21/books/21CELESTENG7/merlin_138191403_92ebaae9-b3ad-4836-b826-abf69539f274-articleLarge.jpg?quality=75&auto=webp&disable=upscale"},
    { name: "Anthony Doerr", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/61/Anthony_Doerr_%282015%29.jpg"},
    { name: "Devdutt Pattanaik", imageUrl: "https://m.media-amazon.com/images/S/amzn-author-media-prod/45kf1posr24aric3h4g3ht7lk9.jpg" },
    { name: "Shashi Tharoor", imageUrl: "https://guide2sucess.com/wp-content/uploads/2023/04/image-6-1024x981.png" },
    { name: "Rabindranath Tagore", imageUrl: "https://i0.wp.com/s3.amazonaws.com/somewherein/pictures/JUWEL777/08-2014/4568b6f4a064d418af9e2ed6f6c8d30b_xlarge.jpeg" },
    { name: "R.K. Narayan", imageUrl: "https://i.prcdn.co/img?regionKey=yudosBTSFc4NpDyLyeU5Pw%3D%3D" },
    { name: "Chetan Bhagat", imageUrl:"https://im.rediff.com/getahead/2012/feb/15chetan-bhagat1.jpg" },
    { name: "Ruskin Bond", imageUrl: "https://static.wixstatic.com/media/f02d5f_715260446efc4bd5bfb33737d016e339~mv2.jpeg/v1/fill/w_480,h_480,fp_0.48_0.29,q_80,usm_0.66_1.00_0.01,enc_auto/f02d5f_715260446efc4bd5bfb33737d016e339~mv2.jpeg" },
    { name: "Wole Soyinka", imageUrl: "https://nyuad.nyu.edu/content/nyuad/en/home/academics/divisions/arts-and-humanities/faculty/wole-soyinka/jcr:content/bio-info/image.adaptive.m1665578017860/394.jpg"},
    { name: "Chinua Achebe ", imageUrl: "https://ei7cr2pn3uw.exactdn.com/wp-content/uploads/2023/10/Chinua-Achebe-Portrait.jpg?strip=all&lossy=1&ssl=1" },
    { name: "Ngũgĩ wa Thiong'o (", imageUrl: "https://media.npr.org/assets/img/2013/04/15/ngugi_sq-ef9f433abf5cec9455dd3091478dde0f47c30a40-s800-c85.jpg" },

    //

    { name: "Yu Hua", imageUrl: "https://i.mydramalist.com/jYmev_5c.jpg" },
    { name: "Yan Ge", imageUrl: "https://www.irishtimes.com/resizer/FoyoZFUklPuqn4nsDt1p5obb6xA=/1600x1200/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/ESKJZIYVYHFSIX6T5Y7AWGOJ4A.jpg" },
    { name: "Liu Cixin", imageUrl: "https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2023/06/05/b148ed46-85a7-432b-b4a1-02ec217dabee_3efc3003.jpg" },
    { name: "Xiaolu Guo", imageUrl: "https://s26162.pcdn.co/wp-content/uploads/2023/03/unnamed-2.jpg" },
    { name: "Amy Tan", imageUrl: "https://www.chicagomag.com/wp-content/uploads/2021/09/C202110-312-Amy-Tan.jpg" },
    { name: "Marieke Lucas Rijneveld", imageUrl: "https://www.the-low-countries.com/uploads/_detail900/Rijneveld.png"},
    { name: "Bernardine Evaristo", imageUrl: "https://i.guim.co.uk/img/media/9a44164fcbdc4fcc77bba2956845aa47d7d591ad/0_1539_3744_2246/master/3744.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=86fcbe1c6d8581f0897a1970915c1776" },
    { name: "Dina Salústio", imageUrl: "https://img.skoob.com.br/ibplV_-iaVAhcSP2EJh0PQhRYUU=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/autores/31743/31743SK-V11628977606G.jpg" },
    { name: "Jhumpa Lahiri", imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTnvP1gV-HlmPsxpqGfJM-NHbnU914SqjRCjylAKPBCs-Uo17bC" },
    { name: "Toni Morrison", imageUrl: "https://images.thewest.com.au/publication/C-10460919/a12b3fe7e293ee763cc5e33fa4f6e7f30c747dae.jpg?imwidth=810&impolicy=wan_v3" },
    { name: "Trent Dalton", imageUrl: "https://i.harperapps.com/authors/49583/x500.JPG" },
    { name: "Jill Ker Conway", imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/11/Jill_Ker_Conway_at_Smith.jpg" },
    { name: "Tsitsi Dangarembga", imageUrl: "https://radcliffe-harvard-edu.imgix.net/ac0e1a67-0623-4172-a094-af159fd541c8/Dangarembga_radcliffe_fellow_22-23.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C38%2C1250%2C1251" },
    { name: "Sisonke Msimang", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sisonke_Msimang_-_TEDxSoweto_2014_-_arm_raised_%28cropped%29.jpg/800px-Sisonke_Msimang_-_TEDxSoweto_2014_-_arm_raised_%28cropped%29.jpg"},
    
    //
    { name: "Coetzee", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5e/J._M._Coetzee_Nov_2023_headshot.jpg" },
    { name: "Doris Lessing", imageUrl: "https://i.dailymail.co.uk/i/pix/2013/11/17/article-2508852-19788F3400000578-524_306x423.jpg" },
    { name: "Nadine Gordimer", imageUrl: "https://media.newyorker.com/photos/59095ac06552fa0be682d7bb/master/pass/Gordimer-Rothman-74415558.jpg"},
    { name: "Nawal El Saadawi", imageUrl: "https://static01.nyt.com/images/2021/03/22/obituaries/22SAADAWI-obit1/merlin_151017159_36bf69e0-f632-4894-8415-5a187b534667-articleLarge.jpg?quality=75&auto=webp&disable=upscale" },
    { name: "Buchi Emecheta", imageUrl: "https://cdn.britannica.com/86/234886-050-7AE740FF/Author-Buchi-Emecheta.jpg" },
    { name: "Ayi Kwei Armah", imageUrl: "https://thecirclevoice.org/wp-content/uploads/2022/05/Ayi-Kwei-Arma-by-Creative-Commons-bw.jpg" },
    { name: "Chigozie Obi", imageUrl: "https://dcbookstore.com/uploads/author/images/77197057320712-Chigozie-Obioma.jpg" },
    { name: "Robert Kiyosaki", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Robert_Kiyosaki_by_Gage_Skidmore_2.jpg/1200px-Robert_Kiyosaki_by_Gage_Skidmore_2.jpg" },
    { name: "Nidhi Upadhyay", imageUrl: "https://nerdybookarazzi.files.wordpress.com/2021/08/7e793699-0ce6-4649-a7b6-3ca344ba3590.jpg" },
    { name: "Harshvardhan Rao", imageUrl: "https://m.media-amazon.com/images/S/amzn-author-media-prod/puvbq34cfnuq9hgns49hhogb74.jpg" },
    { name: "Nelson Mandela", imageUrl: "https://cdn.britannica.com/67/75567-050-4EBBE84D/Nelson-Mandela.jpg" },
    { name: "A. P. J. Abdul Kalam", imageUrl: "https://cdn.britannica.com/56/148856-004-2F59E2D9/APJ-2008.jpg" },
    { name: "Günter Grass", imageUrl: "https://cdn.britannica.com/55/194055-050-AB728629/Gunter-Grass-2007.jpg" },
    { name: "V.S. Naipaul", imageUrl: "https://cdn.britannica.com/15/196015-050-6A423C9A/VS-Naipaul-2014.jpg" },
    { name: "Kiran Desai", imageUrl: "https://s.hdnux.com/photos/75/41/77/16130010/4/1200x0.jpg" },
    { name: "Ravinder Singh", imageUrl: "https://img.etimg.com/thumb/width-640,height-480,imgsize-88560,resizemode-75,msid-46228355/magazines/panache/relationship-status-complicated-bestselling-romance-novelist-ravinder-singh-offers-words-of-wisdom.jpg" },
    //
    { name: "Samit Basu", imageUrl: "https://thedispatch.blob.core.windows.net/thedispatchimages/2021/07/samit-basu.jpg" },
    { name: "Vandana Singh", imageUrl: "https://csi.asu.edu/wp-content/uploads/2018/06/Vandana-Singh.jpg" },
    { name: "Manjula Padmanabhan", imageUrl: "https://assets.telegraphindia.com/telegraph/1af723be-19af-43a9-bf7c-73977e78133b.jpg"},
    { name: "Anita Nair", imageUrl: "https://imagevars.gulfnews.com/magazines/friday/1072348983_medium.jpg" },
    { name: "Amitav Ghosh", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Amitav_Ghosh_by_Gage_Skidmore.jpg" },
    { name: "Chitra Banerjee Divakurani", imageUrl: "https://images.squarespace-cdn.com/content/v1/51b81078e4b018d977c2fada/4f8ccc27-b81a-4771-9a38-82c8d4b43456/chitra%2Bblue%2Bclose.jpg" },
    { name: "George Saunders", imageUrl: "https://cdn.britannica.com/26/215026-050-C576046F/American-author-George-Saunders-2017.jpg" },
    { name: "Yiyun Li", imageUrl: "https://i.guim.co.uk/img/media/f7ce560ac131a9f725e9d2c023510bbfce01632b/0_171_5760_3456/master/5760.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a8489460a770bf51f879031fcfa920cc" },
    { name: "Philip Pullman", imageUrl: "https://www.philip-pullman.com/images/common/philip-pullman-1.jpg" },
    { name: "Annie Proulx", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b0/2018-us-nationalbookfestival-annie-proulx.jpg" },
    { name: "José Saramago", imageUrl: "https://media.npr.org/assets/artslife/books/2010/06/saramago/saramago_custom-d31bddb97467fa597afff80c101962daa6188aec-s1100-c50.jpg" },
    { name: "Anne Tyle", imageUrl:"https://www.dispatch.com/gcdn/authoring/2020/04/19/NCOD/ghows-OH-ff0d0068-438b-45be-82dc-c8ea787b9125-31481d0b.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp" },
    { name: "Shin Kyung-sook", imageUrl: "https://static01.nyt.com/images/2015/09/20/books/review/20subLEE/20subLEE-articleLarge.jpg?quality=75&auto=webp&disable=upscale" },
    { name: "Kim Young-ha", imageUrl: "https://static01.nyt.com/images/2013/10/04/opinion/Kim-contributor/Kim-contributor-superJumbo-v2.jpg"},
    { name: "Han Kang", imageUrl: "https://i.guim.co.uk/img/media/ac8769aed6be675f876a3b5c19b9c3e3373291f5/387_794_4815_2889/master/4815.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f3befed48b2ebdab3f760f50c0b92c06" },
    { name: "Bae Suah", imageUrl: "https://library.ltikorea.or.kr/rest/content/thumbnail/14989?target=default&width=300&height=300" },

    //

    { name: "colm tóibín", imageUrl: "https://cdn.britannica.com/08/193108-050-E6E7E6C2/Colm-Toibin.jpg" },
    { name: "Muriel Spark", imageUrl: "https://www.scottishpoetrylibrary.org.uk/wp-content/uploads/2018/05/Spark-Muriel-by-Gordon-Wright.jpg" },
    { name: "Zadie Smith", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Zadie_Smith_NBCC_2011_Shankbone.jpg/800px-Zadie_Smith_NBCC_2011_Shankbone.jpg" },
    { name: "Rose Tremain", imageUrl: "https://cdn.britannica.com/15/222515-050-B40666E6/British-author-Rose-Tremain-with-Orange-Broadband-Prize-June-4-2008-London-England.jpg"},
    { name: "John Updike", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f0/John_Updike%2C_author_at_PEN_Congress%2C_cropped.jpg" },
    { name: "Jeanette Winterson", imageUrl: "https://www.antonioolmos.com/img-get2/I00000BsXRocyxfE/fit=1000x750/AZO-210712-0062.jpg"},
    { name: "Julia Alvarez", imageUrl: "https://m.media-amazon.com/images/S/amzn-author-media-prod/28jc1kfjh980u16h918s3iio42.jpg"},
    { name: "Jorge Luis Borges", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Jorge_Luis_Borges_1951%2C_by_Grete_Stern.jpg/1200px-Jorge_Luis_Borges_1951%2C_by_Grete_Stern.jpg" },
    { name: "Don DeLillo", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/de/Don_DeLillo%2C_author.jpg" },
    { name: "Ken Follett", imageUrl: "https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/contributor/1419.jpg" },
    { name: "Flannery O'Connor", imageUrl: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_343,q_75,w_260/v1/clients/milledgeville/Flannery_c28d029c-820f-497c-aeec-5f990ebb1bb5.jpg" },
    { name: "Michael Ondaatje", imageUrl:"https://images2.penguinrandomhouse.com/author/22801" },
    { name: "Ann Patchett", imageUrl: "https://i.harperapps.com/authors/20650/x500.JPG" },
    { name: "Edward Said", imageUrl: "https://images.newrepublic.com/4a858361de1f26bb155188dcfb40239a87e2eb98.jpeg"},
    { name: "Faye Kellerman", imageUrl: "https://detnovelcom.files.wordpress.com/2018/07/faye_kellerman1.jpg?w=863" },
    { name: "Camilla Läckberg", imageUrl: "https://i0.wp.com/www.nordinagency.se/wp-content/uploads/2022/06/Camilla_Lackberg_03_414-1-scaled.jpg?fit=687%2C1030" },
    { name: "charles darwin", imageUrl: "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Getty-107875855_zwugoi.jpg" },
    { name: "Stephen Hawking", imageUrl: "https://m.media-amazon.com/images/M/MV5BMTk3M2YxMTUtMDg0OC00ZmMzLWFkNWQtZWU5YjE1ZDBlODMwXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_FMjpg_UX1000_.jpg" },
    { name: "A.A. Milne", imageUrl: "https://poemanalysis.com/wp-content/uploads/2020/12/A.A.-Milne-Portrait.jpg" },
    { name: "Ngozi Adichie", imageUrl: "https://media.newyorker.com/photos/5b044cc954617935a49216c8/master/pass/180604_r32184.jpg" },

    //

    { name: "Barbara Kingsolver", imageUrl: "https://cdn.britannica.com/18/144618-050-0503AD20/Barbara-Kingsolver-American-The-Lacuna-Orange-Prize-June-9-2010.jpg" },
    { name: "Banana Yoshimoto", imageUrl: "https://s37710.pcdn.co/wp-content/uploads/sites/2/2016/05/BananaYoshimoto_creditFumiyaSawa-265x400.jpg" },
    { name: "Anne Lamott", imageUrl: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2015_15/484461/anne-lamott-today-150409-full.jpg"},
    { name: "Roxane Gay", imageUrl: "https://pyxis.nymag.com/v1/imgs/fd2/1ea/c30e7fe717e714d2ac23f0c7f23a7ed91e-roxane-gay.rvertical.w330.jpg"},
    { name: "Ernest Hemingway", imageUrl: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-50363933.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*"},
    { name: "N.K. Jemisin", imageUrl: "https://media.newyorker.com/photos/5e210caff4cb89000996ef7b/master/pass/200127_r35387_rd.jpg"},
    { name: "Margaret Drabble", imageUrl: "https://i.guim.co.uk/img/media/858866f61bc87503b201c5b8d4936f24d4f6ad0e/0_74_5760_3456/master/5760.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=38c845abae087121cbcc04efe3fb15f7"},
    { name: "Cormac McCarthy", imageUrl: "https://media.npr.org/assets/img/2018/05/03/cormac-mccarthy_vert-5c51b4c525ffa5bb117d8df832c73ebdcd558c25-s1100-c50.jpg" },
    { name: "Junot Díaz", imageUrl: "https://news.mit.edu/sites/default/files/images/201209/20120910092107-0.jpg" },
    { name: "Diana Wynne Jones", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3wYzZE7U7C0xiCxyP0ydUAMcQ966R1SiWd03L-p9HnwQ_wQrhyXI3y0iSGUZEDb8EInU&usqp=CAU" },
    { name: "Dinaw Mengestu", imageUrl: "https://assets.vogue.com/photos/5891f423b482c0ea0e4dbf30/master/w_2560%2Cc_limit/img-mengestu_161256319163.jpg" },
    { name: "ibram x. kendi", imageUrl:"https://cdn.britannica.com/66/228366-050-7D5387F6/Ibram-X-Kendi-2020.jpg" },
    { name: "Esi Edugyan", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/54/Esi_Edugyan_-_EMWF_2018_-_DanH-7118_%28cropped%29.jpg" },
    { name: "Jesmyn Ward", imageUrl: "https://d28hgpri8am2if.cloudfront.net/author_images/13781184/jesmyn-ward-547648874.jpg"},
    { name: "Amal El-Mohtar", imageUrl: "https://amalelmohtar.com/content/images/size/w960/2022/05/NAC-Author-Photo-Crop---Colour.jpg" },
    { name: "Octavia E. Butler", imageUrl: "https://static01.nyt.com/images/2021/02/21/books/review/15essentialoctaviabutler/15essentialoctaviabutler-articleLarge.jpg?quality=75&auto=webp&disable=upscale" },
    { name: "Javier Marías", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/31P5CyuV0qL.jpg" },
    { name: "Ishmael Beah", imageUrl: "https://media.npr.org/assets/img/2014/01/08/beah-ishmael_custom-fba6b15e9de7ac5d593342222a8af4dee581277e.jpg" },
    { name: "Teju Cole", imageUrl: "https://windhamcampbell.org/content/headshots/Cole_by_Time_Knox-1669.jpg" },
    { name: "Jodi Picoult", imageUrl: "https://www.lyceumagency.com/wp-content/uploads/2016/02/Jodi-Picoult-credit-Deborah-Feingold-crop-2.jpg" },
    { name: "Yaa Gyasi", imageUrl: "https://literary-arts.org/wp-content/uploads/2021/05/Yaa-Gyasi_1.jpeg" },
    { name: "Tracy Chevalier", imageUrl: "https://images1.penguinrandomhouse.com/author/246113" },
    { name: "Carlos Fuentes", imageUrl: "https://media.npr.org/assets/img/2012/05/15/510932763_11744309_custom-06bdd49d2198ca1ba0908086e632382298e5e463-s1100-c50.jpg" },
    { name: "Hari Kunzru", imageUrl: "https://i.guim.co.uk/img/media/c1599076ea4a1978708828519372ddd2dc033c6c/0_391_8111_4870/master/8111.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c0acca9f85dcd181a1e3d8adc6d15b5f" },

    //

    { name: "William Faulkner", imageUrl: "https://www.nobelprize.org/images/faulkner-13062-portrait-medium.jpg" },
    { name: "Jane Austen", imageUrl: "https://cdn.britannica.com/79/83679-050-08F0DFBA/Jane-Austen.jpg" },
    { name: "Charles Dickens", imageUrl: "https://hips.hearstapps.com/hmg-prod/images/english-novelist-charles-dickens-news-photo-1695141740.jpg?crop=1.00xw:0.783xh;0,0.0731xh&resize=640:*"},
    { name: "Franz Kafka", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Franz_Kafka%2C_1923.jpg/1200px-Franz_Kafka%2C_1923.jpg"},
    { name: "Thomas Mann", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/95/Thomas_Mann_1929.jpg"},
    { name: "Vladimir Nabokov", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/87/Vladimir_Nabokov_1973.jpg"},
    { name: "Donald J. Sobol", imageUrl: "https://static01.nyt.com/images/2012/07/17/arts/obit-Sobol1/obit-Sobol1-superJumbo.jpg"},
    { name: "Louisa May Alcott", imageUrl: "https://img1.wsimg.com/isteam/ip/856fd03b-c594-497c-b644-a8652bdc6bcd/1195767e-5ed2-45d2-9ccc-a2740e1ed873.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true"},
    { name: "Norton Juster", imageUrl: "https://i.guim.co.uk/img/media/cd4216b07220e2dd03a23bbc8d3884b6f3cc68eb/0_326_4896_2938/master/4896.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=6528b922c6d4943cb22f7bf8665c19f0" },
    { name: "Frances Moore Lappé", imageUrl: "https://rightlivelihood.org/app/uploads/1987/08/RS10633_RLA_FrancesMooreLappe_17May2018_008-scaled.jpg" },
    { name: "Robert McCloskey", imageUrl:"https://cdn2.hubspot.net/hub/237126/file-1595767670-jpg/robert_mccloskey.jpg" },
    { name: "Tara Brach", imageUrl: "https://www.tarabrach.com/wp-content/uploads/2021/08/TaraBrach.jpg" },
    { name: "Peter S. Beagle", imageUrl: "https://m.media-amazon.com/images/M/MV5BY2Y3ZTU1OGQtZWZlNy00YzBjLWIzYTgtNDUyYTFlZWI2NjcxXkEyXkFqcGdeQXVyMzI2MDEwNA@@._V1_.jpg"},
    { name: "J. M. Coetzee", imageUrl: "https://cdn.britannica.com/74/114774-050-591D2828/J-M-Coetzee.jpg" },
    { name: "Katherine Dunn", imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/49/Katherine_Dunn.jpg" },
    { name: "Milorad Pavić", imageUrl: "https://literariness.org/wp-content/uploads/2022/10/photo-miloradpavic.jpeg" },
    { name: "David Grann", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/David_Grann_at_2023_National_Book_Festival_%2853123463590%29_%28cropped%29.jpg" },
    { name: "Edgar Allan Poe", imageUrl: "https://www.pbs.org/wnet/americanmasters/files/2015/10/Edgar_Allan_Poe_daguerreotype_crop-731x1024.png" },
    { name: "Daniel James Brown", imageUrl: "https://www.kwls.org/wp-content/uploads/2019/04/Brown-Daniel-James-photo-square-1000x1000.jpg" },
    { name: "Alice Walker", imageUrl: "https://english.colostate.edu/wp-content/uploads/sites/56/2017/02/alicewalker.jpg" },
    { name: "Bonnie Garmus", imageUrl: "https://drsw10gc90t0z.cloudfront.net/AcuCustom/Sitename/DAM/338/bonnie-garmus2.jpg" },
    { name: "Evan Hughes", imageUrl: "https://1.bp.blogspot.com/-dgYvPX1fAG4/XAdGgN6db9I/AAAAAAAAnX8/DD67hdqoBLM9IlBn77ECMpmq9-3AYBAQwCLcBGAs/s1600/Screen%2BShot%2B2018-12-04%2Bat%2B7.30.49%2BPM.png" },
    { name: "Charmaine Wilkerson", imageUrl: "https://m.media-amazon.com/images/S/amzn-author-media-prod/k6a9lv2hrs7kokkbb97htro987.jpg" },



];

function authorpics() {
    var container = document.querySelector('.authors');

    authors.forEach(function (author) {
        var authorElement = document.createElement('div');
        authorElement.className = 'author';

    
        var authorPic = document.createElement('img');
        authorPic.src = author.imageUrl;
        authorPic.alt = author.name;
        authorPic.loading=author.loading;
        authorPic.className = 'author-img';

        
        var authorname = document.createElement('p');
        authorname.style.fontSize = "17px";
        authorname.style.fontFamily = "Roboto", "sans-serif";
        authorname.textContent = author.name;

       
        authorElement.appendChild(authorPic);
        authorElement.appendChild(authorname);

        container.appendChild(authorElement);
        
        

    });

    
}
authorpics();

function search(){
    const search_author=document.getElementById("search-authors").value.toUpperCase();
    const author_all=document.querySelectorAll(".author");
    const container=document.querySelector(".authors");

    let lastmsg=document.getElementById("display_msg");
    if(lastmsg){
        container.removeChild(lastmsg);
    }

    let authorfound=false;

    for(let i=0;i<author_all.length;i++){
        let match=author_all[i].getElementsByTagName("p")[0];

        if(match){
            let text=match.textContent||match.innerHTML;

            if(text.toUpperCase().indexOf(search_author)>-1){
                author_all[i].style.display="";
                authorfound=true;
            }
            else{
                author_all[i].style.display="none";
            }
        }
    }
    if(!authorfound){
        let display_msg=document.createElement("h1");
        display_msg.id="display_msg";
        display_msg.textContent="Sorry :( No Result Found!";
        container.appendChild(display_msg)
    }
}
document.getElementById("search-authors").addEventListener("input",search);

// const navlink=document.querySelectorAll(".nav_link");

// navlink.forEach(e=>{
//     e.addEventListener("click",()=>{
//         document.querySelector(".active")?.classList.remove("active");
//         e.classList.add("active")
//     })
// })

function showbox(){
    const j=document.getElementById("1");
    const side_box=document.getElementsByClassName("author-details");
    const close=document.getElementById("close");
   

    j.addEventListener("click",function(){
        
        var keyframes=[
            {transform:"translateX(-880px)"},
            {transform:"translateX(0px)"},
        ]
        var options={
            duration:500,
            easing:"ease-in",
        };

        side_box[0].animate(keyframes,options);
        side_box[0].style.display="block";


        close.addEventListener("click",()=>{
            var keyframe1=[
                {transform:"translateX(0px)"},
                {transform:"translateX(-1250px)"},
            ]
            var options1={
                duration:800,
                easing:"ease-out",
            };
            side_box[0].animate(keyframe1,options1).onfinish=()=>side_box[0].style.display="none";
        })
    })
}
showbox();
