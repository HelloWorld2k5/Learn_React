import { useState, useRef, useEffect } from "react";

function SmartVideoPlayer() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Tạo IntersectionObserver theo dõi thẻ video
    useEffect(() => {
        
        // Định nghĩa hành động
        const playVideo = (entries) => {
            const entry = entries[0]; // mục tiêu đầu tiên quan sát được

            if (entry.isIntersecting) {
                console.log('Đã thấy video! ', entry.target);
                setIsPlaying(true);
            } else {
                console.log('Chưa thấy video!');
                setIsPlaying(false);
            }
        };

        const options = {
            root: null, // vùng quan sát
            rootMargin: '0px', // biên độ vùng quan sát của setinal video
            threshold: 0.5 // thấy 50% kích thước video là báo động
        };

        const observer = new IntersectionObserver(playVideo, options);

        if (videoRef.current) {
            observer.observe(videoRef.current); // bắt đầu theo dõi thẻ video
        }

        return () => {
            // khi component unmount thì dọn dẹp Observer
            console.log('Dọn dẹp observer!');
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isPlaying]);

    return (
        <>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, modi aliquid consectetur soluta, natus fuga odit nemo tempora illo dolores atque reiciendis dolor quaerat nobis cumque eum laudantium itaque molestiae?
            Alias quae commodi harum at tempora. Beatae harum laudantium voluptatibus pariatur, ut exercitationem ducimus maiores distinctio mollitia minima eius magnam iure vero fuga corrupti aperiam similique expedita nostrum nesciunt? Ratione?
            Dolorum molestias cum pariatur aut odit, optio similique explicabo esse voluptatibus voluptates commodi. Eligendi laboriosam, voluptatum repellendus quos quia labore laudantium dolorem aliquam ab numquam distinctio tenetur accusantium deserunt temporibus.
            Velit eveniet quam, fugiat, ipsam accusantium hic voluptate, tempora harum earum facilis officia vero molestiae temporibus. Et repellendus culpa vel optio a hic est nemo, saepe debitis maiores! Vitae, aspernatur!
            Voluptatem distinctio id ex quaerat ipsam quisquam recusandae tempore reiciendis, ullam minus accusamus molestias qui quo cupiditate aliquid perferendis quasi adipisci voluptatibus nobis vel quidem aperiam. Mollitia dicta voluptatem ipsam.
            Eos, saepe quisquam? Aliquam quibusdam iusto voluptatibus eius quis repellendus exercitationem, fugit, voluptatem corrupti placeat dolore! Quas quibusdam quo optio porro aperiam vitae dicta officiis nam voluptates? Dolor, perspiciatis ad!
            Consequatur vero fugiat quibusdam repudiandae. Nisi, sint labore? Explicabo omnis repellendus quidem rerum, cupiditate, earum optio deleniti soluta consequatur voluptas nemo temporibus molestias sequi accusantium velit vel id harum neque!
            Soluta quaerat dolorum, culpa minus dolore nihil ipsum veritatis sapiente aspernatur, nam esse! Beatae molestias nulla officiis autem dolore dolor maiores inventore laudantium rerum. Quae nesciunt magni quod perspiciatis dignissimos.
            Est maiores quod obcaecati laborum! Vel, enim obcaecati similique tempora ab sed neque atque. Itaque fuga voluptatum mollitia et tempore dicta pariatur cum officia eum? Sed expedita quam ab velit!
            Quae quisquam dolores voluptates debitis laudantium rerum doloribus, facilis, corporis reprehenderit maxime fuga tempore earum non autem velit! Amet minima ut veritatis accusantium sapiente. Enim quibusdam mollitia nemo quidem hic!
            Quaerat exercitationem dolore dolorem libero. Rerum quae beatae repellat delectus vero eaque dolore molestiae quo sit distinctio explicabo rem expedita recusandae suscipit nobis in facilis, maiores qui quisquam tempore vitae!
            Voluptas, quaerat esse fugit quod alias dolores sit tempora nisi dignissimos ab expedita, aut aperiam incidunt eum ex maxime! Placeat at dicta dolores saepe veniam exercitationem nihil fugit cum? Nostrum?
            Vitae exercitationem ea necessitatibus aperiam et eveniet praesentium labore modi perferendis, accusamus magni vel impedit. Quasi ipsum vero cupiditate, ad pariatur atque quidem enim corporis, voluptatibus ipsa dolore! Dicta, debitis!
            Laudantium amet officiis temporibus vel aut accusantium quod, doloribus, nam cum ut reiciendis enim voluptate fugiat vero iusto. Animi iste doloribus blanditiis voluptas reprehenderit amet quasi reiciendis error, iusto culpa?
            Quidem, ad distinctio vero corporis numquam rerum quasi asperiores quos voluptas cumque molestias maiores iure. Quis id, laboriosam, minus eveniet, exercitationem quos veniam corrupti deleniti architecto cupiditate aperiam repellendus incidunt!
            Quaerat facere architecto obcaecati, tempore explicabo quia fuga exercitationem ullam hic optio laborum, fugit reprehenderit! Sit, eos tenetur pariatur, error suscipit accusantium veritatis nesciunt saepe earum, veniam illo aliquid! Cum!
            Quaerat unde ad alias, deleniti nobis veritatis voluptatum repellendus ipsa dicta dolorem iusto harum ab similique numquam optio at corporis quos quidem. Reiciendis tempore veritatis quam magni natus modi saepe.
            Illo, sequi? Quibusdam est doloribus consequatur praesentium ullam inventore voluptas minima facere numquam? Doloribus, eos maiores cumque eveniet illo praesentium dolor ratione harum molestiae corporis esse? Tempora sint quia amet?
            Sed recusandae nihil rerum non illum, neque porro hic voluptas dolorem dolore nemo inventore atque modi sequi repudiandae exercitationem ducimus velit reprehenderit necessitatibus ipsum quibusdam sit culpa? Adipisci, labore praesentium.
            Placeat dolorum temporibus eum, dignissimos amet saepe facilis iusto dolore dolorem reiciendis accusantium reprehenderit. Error numquam quisquam illo corrupti. Blanditiis doloribus minus numquam? Ea facere autem ab beatae perspiciatis officia?
            Omnis, accusamus in fuga ut illum officiis corrupti vitae magni debitis ducimus molestias aliquam non deleniti praesentium sequi optio. Nobis deleniti asperiores error architecto nesciunt quas vitae saepe officia nulla.
            Natus praesentium cumque a corrupti incidunt alias voluptate, quos earum sed voluptatem molestiae. Sit veritatis molestias harum facere, explicabo laborum dolore aspernatur mollitia dolorum, eius nobis ea minus. Ducimus, consequatur.
            Accusantium quam autem obcaecati assumenda. Et autem eaque dolore aliquid repellat est saepe tenetur odit placeat ad voluptates similique cumque, suscipit laboriosam non, voluptatum, pariatur nemo aliquam hic cum nam?
            Facere architecto earum dolore veritatis adipisci a laudantium! Totam laboriosam nemo laborum in quisquam reiciendis temporibus alias, voluptate asperiores excepturi officia enim atque nam inventore adipisci. Nemo fuga laudantium numquam.
            Quae, commodi expedita ex veniam, odit nisi id debitis neque enim mollitia officia praesentium facilis deserunt odio optio modi, quas ad possimus magnam vitae. Culpa quia porro dolores ad aut?
            Voluptates vitae, debitis autem adipisci maxime reiciendis et! Voluptas nisi sunt maxime, harum, sit facere ipsam nobis necessitatibus laborum corrupti quae assumenda accusantium temporibus sequi. Aperiam eaque tenetur at repellat!
            Excepturi delectus vitae ullam quia voluptatem hic rem consequatur accusantium! Eos nulla est officiis, tempore alias possimus sed laboriosam assumenda quasi obcaecati molestiae necessitatibus sunt sapiente nemo nisi mollitia asperiores.
            Blanditiis in quo cumque? Non quas omnis, dolore accusamus aliquid deserunt iste fugit blanditiis quam nostrum. Accusantium explicabo, nemo, inventore non libero animi deserunt, totam ea dignissimos error perferendis aliquam!
            Laudantium quia, possimus ad officiis illo tempore accusamus, ex rerum asperiores quos dignissimos esse adipisci corporis exercitationem obcaecati amet, doloribus molestiae nisi natus voluptatum aspernatur nam earum cumque inventore! Earum?
            Ad aperiam eos quo, vero nulla vel tempora reprehenderit laudantium sapiente ab sequi maiores itaque voluptas veniam numquam cumque a iusto suscipit animi deleniti aut nisi. Earum dolorem consequuntur ad.
            Architecto sunt mollitia consequatur veritatis quae eaque cum eum voluptate enim blanditiis, molestiae magnam eveniet quas quos consectetur, qui quia. Adipisci aspernatur iure magnam architecto odit corrupti excepturi, nisi qui.
            Tenetur similique saepe minima corporis, quos ex sint aperiam ipsum sit. Enim quod molestiae impedit! Sapiente, in nobis dolorum assumenda officiis magnam commodi odit architecto consectetur voluptatum laborum doloribus nihil?
            Repellendus optio ad culpa. Eius tenetur qui velit quos ut at, enim officia doloribus, quaerat adipisci eos repellendus quod ratione? Fugiat quis iste blanditiis, reprehenderit sint nobis quisquam officia veniam.
            Commodi perspiciatis provident consequatur assumenda nihil accusamus voluptates nisi! Exercitationem odit reiciendis magni esse sapiente ducimus error, praesentium ipsa rem doloribus, rerum blanditiis! Eaque reprehenderit eius sit eveniet itaque obcaecati.
            Omnis, aspernatur? Aliquam consequatur eaque quod nesciunt rem libero fugiat, voluptatum officiis blanditiis explicabo dolores accusantium adipisci iusto, incidunt ullam doloremque magnam. Voluptates optio incidunt error neque voluptatem atque aperiam?
            Rem aliquid reprehenderit, nulla eius qui rerum inventore cum quisquam assumenda repudiandae incidunt, deleniti quidem necessitatibus nisi praesentium distinctio id quasi. Ea placeat magni laboriosam quaerat repellat commodi dolor provident.
            Eum officiis dolor delectus quaerat porro ea tenetur. Cum, nostrum ea itaque sequi adipisci in tempora, animi officiis quis autem voluptates voluptas quisquam vel, impedit repudiandae. Fugit, laudantium saepe. Totam.
            Illo, distinctio ipsa assumenda itaque aliquid, vel impedit consequuntur odio et maxime molestiae possimus quo? Natus eius, quas consequuntur tenetur praesentium deleniti temporibus quisquam, adipisci cum quo mollitia perspiciatis soluta!
            Atque maiores dolor libero deserunt, reprehenderit assumenda minus? Saepe labore deserunt magnam, ipsa libero maxime reprehenderit hic, earum, cum natus nesciunt quod molestiae officia necessitatibus. Facilis optio at saepe facere.
            Fugiat nulla nesciunt maxime praesentium ab asperiores aliquid dignissimos, animi quis omnis a, ducimus accusantium eius, libero deserunt laborum harum sit suscipit? Explicabo, fugiat consequatur sapiente error voluptatem esse blanditiis!</p>
            <p>{isPlaying ? 'Đang xem' : 'Tạm dừng'}</p>
            <video ref={videoRef} src="../video.mp4" loop controls></video>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere optio sit quod nulla necessitatibus porro, doloremque adipisci ipsa quia blanditiis ducimus consequatur nemo quo ex recusandae perferendis! Blanditiis, dolores deleniti?
            Perferendis, maiores nesciunt! Quisquam molestias nemo blanditiis adipisci provident quidem laboriosam voluptas minima rem necessitatibus odio iure sequi, suscipit quos quo voluptatibus non. Libero consectetur odio doloremque repudiandae numquam aspernatur?
            Non ea perspiciatis ipsam a, incidunt sequi similique architecto, sed quae ad placeat est? Ipsam asperiores sint neque culpa nisi, cum doloribus odit magni error incidunt impedit, rem quibusdam alias!
            Eum sequi voluptate nulla eius facilis, placeat, sapiente, cum deserunt numquam quia at autem? Ipsa neque cupiditate amet non placeat tempora porro id. Architecto non consequatur, esse nemo soluta tenetur!
            Sit modi omnis iure, quidem voluptas sunt dolores hic consequatur vel ab unde quam quaerat alias nobis, totam odio possimus sed delectus magni vitae! Amet perspiciatis placeat voluptas magni unde.
            Earum, iste quas optio, sed ducimus praesentium doloribus omnis vitae quia distinctio et ab possimus corporis, laboriosam iure ratione ipsam! Cumque blanditiis odio aliquam vero? Saepe nam facere deserunt minima.
            Suscipit, officia exercitationem reiciendis assumenda similique fuga incidunt vero quibusdam sint labore sapiente magnam a? Ad nesciunt quaerat nisi minus iste! Vero impedit tenetur voluptatibus est delectus consequatur dolorum dolores?
            Quisquam quia expedita fuga assumenda, architecto consequuntur doloribus tempore vero mollitia rem nulla sed amet obcaecati ea et, odio, veritatis fugit. Vel labore reiciendis obcaecati, officia nemo in? Voluptas, ducimus?
            Provident id pariatur repellat ut reprehenderit a sunt obcaecati voluptatem adipisci quos, distinctio hic quod saepe doloribus. Inventore in, error nostrum magni sed est officiis voluptates ea delectus, asperiores quaerat?
            Omnis, blanditiis numquam. Totam magnam voluptas itaque amet incidunt impedit natus facilis? Dicta libero a non reprehenderit dolorem possimus esse, voluptates in asperiores, eaque debitis dolores ipsa reiciendis adipisci iste.
            Porro aperiam voluptatibus illo quos eos vel ad necessitatibus, ipsam facere animi. Impedit veniam quasi, enim amet maxime voluptates, labore autem officia totam consectetur eum distinctio deserunt earum quas reiciendis?
            Repudiandae facilis nam, iusto voluptatibus vitae autem dolor quo ducimus quam at aspernatur hic veniam recusandae animi fugit aut nesciunt cumque tenetur veritatis laudantium sed, culpa quis consequuntur exercitationem. Quae.
            Libero temporibus sint veritatis natus magnam ad, deserunt modi illo porro beatae ex id, repellendus voluptas, fugiat cumque atque vitae dolorem nihil animi. Aperiam assumenda cum natus nisi fugiat corrupti?
            Nisi corrupti officia autem laudantium soluta suscipit quos illo tenetur aliquid? Perspiciatis consectetur delectus odit minima libero saepe. Blanditiis velit esse fugit corrupti exercitationem facere numquam tempora, deleniti voluptatem quidem?
            Sunt deserunt rerum ducimus obcaecati at quae ullam corrupti recusandae minima, similique modi. Nam id enim error fugit ipsum a? Incidunt eos reprehenderit omnis ipsa laudantium. Placeat, illo a! Saepe.
            Ab hic nulla ut temporibus accusantium culpa ducimus minus. Mollitia saepe veniam at architecto! Temporibus nostrum laborum eum debitis maiores. Deserunt dolores ullam magni quam beatae assumenda asperiores id est!
            Iure veritatis excepturi sapiente dolorem dolorum mollitia eaque odio quo praesentium similique rem alias quod eius voluptatem, odit nam distinctio ab ratione est. At debitis quas accusamus repellendus cupiditate quia!
            Reprehenderit illum, doloremque dicta impedit voluptas eos deserunt alias officiis commodi cupiditate, beatae voluptates exercitationem? Incidunt labore temporibus ex expedita nam numquam, minus tenetur iusto eos facere ut nihil atque!
            Delectus modi cupiditate harum fugiat explicabo reprehenderit dignissimos, doloribus impedit perferendis nostrum exercitationem earum molestias est et, sapiente praesentium a. Mollitia, esse illo! Nihil iste quod est nam laudantium magni!
            Accusamus doloribus pariatur cupiditate corporis et eaque! Veniam, repellendus officia! Voluptas velit ab tempora soluta ad suscipit quia quam aperiam similique neque hic quasi, dolores dolore sit doloribus repudiandae deserunt.
            Dolorem provident quos hic, amet sint odit nemo earum quisquam, id, ex dolorum commodi ab sit. Debitis officiis sed deserunt consequatur nostrum, ipsum veritatis accusantium voluptas aliquam numquam sequi aspernatur?
            Optio, nostrum asperiores. Aut rem adipisci error exercitationem molestias modi deserunt! Amet tenetur quo porro. Cupiditate hic ad consectetur aliquam, blanditiis, non rem nostrum neque assumenda atque quibusdam iusto quod.
            Deleniti quibusdam ad soluta, cupiditate aliquam accusantium quis porro earum inventore consequatur quam? Illum, enim! Molestiae, ex! Est, quos laboriosam? Accusamus, labore! Alias, voluptatum reprehenderit! Neque ex eius cupiditate dolorem.
            Laboriosam voluptate maxime, eos excepturi odit cum corporis voluptatibus quo ipsum rerum esse iusto doloremque adipisci aspernatur assumenda. Eius labore exercitationem aspernatur fugiat nemo laborum iusto dignissimos atque dolorem dicta.
            Facilis doloremque reprehenderit et eum voluptates repudiandae voluptatum aliquid nisi tempore aut laboriosam id minima voluptatibus optio, reiciendis repellat. Ut inventore saepe cumque officia dolorum doloremque tempora tenetur et dolorem!
            Rem accusamus, voluptatibus inventore minus perferendis dolore sed, atque consectetur, tempora non quisquam quibusdam ex aperiam maiores illo impedit tenetur laboriosam cupiditate recusandae ullam esse! Ullam, amet fugit! Voluptatem, similique.
            Fuga provident quos officia itaque distinctio quisquam, quidem, quod animi cum obcaecati sapiente magnam mollitia in nihil deleniti eveniet. Dolore voluptatem facere incidunt quae ducimus, velit optio pariatur beatae dignissimos?
            Explicabo recusandae iure, rem ipsum obcaecati inventore soluta autem, qui repellendus distinctio rerum. Nobis amet, neque ad error ex tenetur natus inventore autem provident impedit? Unde nemo sunt doloribus ex.
            Rem totam repellendus doloremque sed quibusdam quae perferendis tempore corrupti dolor nobis! Ipsum ab facere porro similique inventore iure quod eum fugiat rem alias, placeat odit enim perferendis fuga fugit.
            Asperiores officiis culpa quaerat dicta eius maxime quis deserunt aspernatur numquam sit. Laboriosam pariatur repellat qui temporibus fuga libero, dolores sit aliquid nemo sequi corporis minus error itaque porro asperiores?
            Error voluptas iusto ut? Facere maiores assumenda eaque itaque laboriosam maxime, cumque doloribus molestias autem necessitatibus pariatur nemo fuga, omnis, consequuntur voluptate iure ullam? Vero accusantium iusto quidem porro atque.
            Assumenda, beatae aut. Et consequuntur maxime illo quaerat accusamus, dolor numquam amet minus! Facilis voluptatem eveniet mollitia voluptate, laudantium sed, a aliquid veniam perspiciatis repudiandae qui. Obcaecati libero aut error.
            Veritatis nostrum nulla obcaecati aliquam ullam quod. Facere rerum praesentium voluptas modi impedit laborum suscipit minus dolores quas qui hic, officiis tempora corrupti, placeat numquam reprehenderit in natus quos ipsam.
            Expedita possimus numquam ex incidunt non porro rem vero hic placeat suscipit provident, corporis ratione molestias animi minus, doloremque optio laborum. Corrupti suscipit officiis itaque eaque esse architecto quidem molestiae.
            Quod, aperiam animi? Fugit eum, adipisci obcaecati perspiciatis reprehenderit officia enim suscipit numquam explicabo, sapiente quae, tempora non aliquid et officiis fuga sint pariatur. Harum deserunt laboriosam omnis accusantium commodi!
            Quibusdam commodi laboriosam facilis vel? Dignissimos unde quasi, vel id consequuntur sunt atque eveniet modi dolorum numquam, reprehenderit quaerat veniam inventore dicta temporibus aperiam accusamus ab, vero incidunt obcaecati cumque.
            Voluptas labore rem iste, vel molestiae excepturi laboriosam, similique, nihil repudiandae aspernatur ipsam perspiciatis iure earum ducimus cumque cupiditate odit culpa dolorem dolor saepe. Quasi aut ipsam cupiditate rerum animi.
            Beatae quasi ullam ab. Similique consectetur, inventore velit harum dolor ab consequuntur nisi voluptatibus laboriosam aspernatur quaerat reiciendis quisquam accusantium? Velit optio hic aperiam laudantium labore, corrupti reiciendis delectus perspiciatis.
            Libero amet beatae atque qui sed, totam quae, veniam distinctio ratione sunt, fuga similique. Quam, atque. Labore quis nostrum est modi tempora nemo quibusdam, eveniet numquam laborum nulla eius a.
            Voluptates optio tempore cumque veniam, alias illum aperiam nostrum quia distinctio repudiandae temporibus, architecto quo suscipit voluptatibus ea ipsam enim magni minus adipisci delectus harum facilis sunt est quidem. Ex.
            Officiis repellat nemo, assumenda adipisci cupiditate accusamus optio provident culpa impedit reiciendis eum, eveniet fuga a nisi, corporis repellendus reprehenderit commodi minus itaque obcaecati quod quae sequi eaque laboriosam. Et!
            Facere quo laudantium suscipit sint enim consequuntur veritatis nobis doloribus repellendus pariatur dolores, autem, nemo vel. Reiciendis, architecto laudantium cum dolore dolorem voluptatem eaque quia, quod accusamus quas in iure.
            Officiis, consequatur ipsa? Eligendi deserunt consectetur consequuntur, unde hic, aut laborum provident fuga ducimus animi qui, quidem excepturi! Vitae alias aspernatur commodi sequi omnis! Eveniet dolore debitis veniam tenetur quae!
            Dolorum non, provident possimus delectus nulla placeat cumque aliquid asperiores! Omnis distinctio quod facere, officia alias nemo dolor autem neque voluptatem quas. Beatae ipsa incidunt rerum voluptas nisi voluptatem deleniti!
            Et esse inventore non, excepturi ipsa dolorem doloremque, recusandae deleniti amet dolorum illum deserunt facere blanditiis! Nobis praesentium cumque minima at dolore consequatur porro! Et obcaecati eos illo voluptates possimus!
            Possimus nulla reiciendis, fugiat et adipisci asperiores. Commodi culpa non quae recusandae quis natus enim numquam obcaecati unde rem iusto et excepturi, eius, perspiciatis maiores voluptatibus ducimus officia necessitatibus! Reprehenderit.
            Quaerat enim suscipit possimus molestias quibusdam nesciunt vel id placeat vitae dolorem earum reprehenderit asperiores velit sapiente, nisi dolorum quas quam! Molestias culpa eum et suscipit unde dolorum magnam eaque?
            Laborum sequi labore voluptates maiores, aut nemo repellat modi corporis veritatis numquam vel consectetur quo aliquid nobis voluptas quam quibusdam aperiam ad similique alias asperiores. Animi itaque exercitationem cupiditate voluptatibus.
            Ipsa consectetur assumenda quibusdam sed sit, provident ratione natus quia adipisci maiores sint laboriosam consequuntur facere aliquam nam eveniet architecto dolores alias quas id deleniti omnis enim? Suscipit, quidem culpa.
            Nostrum, doloribus omnis! Autem, fugiat eaque corporis accusamus quos dolorem molestias vitae nam assumenda reiciendis ratione, debitis explicabo quaerat quod tempore pariatur facilis, incidunt cumque laboriosam eos consequuntur. Et, harum.</p>
        </>
    );
}

export default SmartVideoPlayer;