/* =========================================================
   DATA — sourced only from the attached document
   ========================================================= */
const timelineData = [
  {yr:"Late 1980s–1990", title:"Before Java", desc:"Personal computers, workstations, and consumer electronics multiply — but software built for one device rarely runs on another.", detail:"Different processors and operating systems meant software had almost no portability. Sun Microsystems engineers began imagining a future where televisions, home appliances, and handheld electronics would all need software that could run across many kinds of hardware. That challenge inspired the creation of a new programming language."},
  {yr:"June 1991", title:"The Green Project Begins", desc:"Sun Microsystems forms a secret research team, the Green Team, to design software for next-generation consumer electronics.", detail:"The Green Team's mission covered interactive televisions, smart home devices, cable boxes, and handheld electronics. They wanted a language that was portable, secure, reliable, easy to program, and independent of hardware. Core members: James Gosling (chief language designer), Patrick Naughton (software engineer and project initiator), Mike Sheridan (project leader), Bill Joy (Sun co-founder and technical advisor), and Guy Steele (programming language expert)."},
  {yr:"1991", title:"The Birth of Oak", desc:"James Gosling designs a new language from scratch, naming it Oak after the tree outside his office window.", detail:"Oak borrowed basic syntax from C, simplified object-oriented concepts from C++, object-oriented philosophy from Smalltalk, and structured programming from Pascal. It deliberately removed multiple inheritance of implementation, pointer arithmetic, manual memory management, header files, and operator overloading — replacing them with automatic garbage collection, strong type checking, exception handling, built-in security, and platform independence."},
  {yr:"1992", title:"The Star7 PDA", desc:"The Green Team builds a prototype handheld device, the Star7 Personal Digital Assistant, to prove Oak works across hardware.", detail:"Though the Star7 was never commercially released, it demonstrated that Oak could run interactive applications on consumer devices — success that encouraged Sun to keep developing the language."},
  {yr:"1993–1994", title:"The Internet Changes Everything", desc:"As the World Wide Web grows rapidly, Sun realizes Oak is far more valuable for Internet applications than television devices.", detail:"The team shifted its focus toward web programming. Oak's platform independence was ideal for the Internet, where users ran many different operating systems."},
  {yr:"May 23, 1995", title:"Oak Becomes Java", desc:"With the name \"Oak\" already trademarked, the team chooses \"Java,\" inspired by Java coffee, and announces it at SunWorld.", detail:"After brainstorming several names, the team settled on Java. It was officially announced at the SunWorld conference on May 23, 1995."},
  {yr:"January 1996", title:"Java 1.0 Released", desc:"The first official version ships with OOP, the JVM, garbage collection, multithreading, and a built-in security sandbox.", detail:"Major features: Object-Oriented Programming, Platform Independence, the Java Virtual Machine, Automatic Garbage Collection, Multithreading, Network Programming, a Security Sandbox, and the Abstract Window Toolkit (AWT). The HotJava web browser demonstrated Java's capabilities to the world."},
  {yr:"1996–2000", title:"Java Applets", desc:"Small Java programs that ran inside web browsers became one of Java's earliest and most visible successes.", detail:"Developers used applets for games, animations, interactive websites, and educational software. They eventually disappeared due to browser security concerns and the rise of newer web technologies such as JavaScript and HTML5."},
  {yr:"1998", title:"Java 2 Platform", desc:"Sun splits Java into three editions — J2SE, J2EE, and J2ME — for desktop, enterprise, and mobile use.", detail:"J2SE (Java Standard Edition) targeted desktop applications. J2EE (Java Enterprise Edition) targeted enterprise software and web servers. J2ME (Java Micro Edition) targeted mobile phones and embedded devices. New features included Swing GUI, the Collections Framework, Java 2D Graphics, improved security, and better performance."},
  {yr:"2000–2003", title:"Enterprise Java", desc:"Banks, governments, hospitals, airlines, and insurers adopt Java for its stability, security, scalability, and reliability.", detail:"Key technologies introduced during this era included Servlets, JavaServer Pages (JSP), and Enterprise JavaBeans (EJB) — cementing Java's role as the backbone of enterprise software."},
  {yr:"2004", title:"Java 5", desc:"One of the largest language updates ever, adding generics, enums, annotations, and more.", detail:"New features: Generics, the Enhanced For Loop, Autoboxing, Enumerations (Enums), Annotations, and Variable Arguments (Varargs) — a major boost to programmer productivity."},
  {yr:"2006", title:"Open Source Java", desc:"Sun releases much of Java under an open-source license through the OpenJDK project.", detail:"OpenJDK allowed developers worldwide to contribute to Java's development, and later became the official reference implementation of Java."},
  {yr:"2008", title:"Android Arrives", desc:"Google launches Android, with apps initially written primarily in Java.", detail:"Although Android does not use the standard Java Virtual Machine, its early reliance on the Java language greatly increased Java's popularity among mobile developers."},
  {yr:"2010", title:"Oracle Acquires Sun", desc:"Oracle Corporation purchases Sun Microsystems for approximately $7.4 billion, becoming Java's new steward.", detail:"After the acquisition, Oracle continued Java development, introduced more predictable release schedules, and expanded commercial support — while OpenJDK remained the open-source reference implementation."},
  {yr:"2014", title:"Java 8", desc:"Widely considered one of the most important releases, bringing lambda expressions and the Stream API.", detail:"Major features: Lambda Expressions, the Stream API, functional programming support, a new Date and Time API, and Default Methods — making Java easier to write and more efficient."},
  {yr:"2017", title:"Java 9", desc:"Project Jigsaw introduces the Java Platform Module System.", detail:"Alongside the Module System, Java 9 brought better JVM performance, smaller runtime images, and improved documentation tools."},
  {yr:"2018", title:"A New Release Cycle", desc:"Oracle moves from multi-year waits to a new feature release every six months.", detail:"Long-Term Support (LTS) versions receive extended updates and are commonly used by businesses. Oracle's roadmap lists Java SE 8, 11, 17, 21, and 25 as LTS releases. The next planned LTS after Java 25 is Java 29, scheduled for September 2027."},
  {yr:"2018–2024", title:"Modern Java", desc:"Records, sealed classes, pattern matching, and virtual threads keep the language evolving.", detail:"Java 14–23 introduced Records (JEP 395), Sealed Classes (JEP 409), Pattern Matching for switch (JEP 441), Text Blocks (JEP 378), Switch Expressions, and Virtual Threads (JEP 444, Project Loom). G1 became the default garbage collector (JEP 248). The Foreign Function & Memory API (JEP 454) bridged Java and native code. All changes maintain backward compatibility."},
  {yr:"September 16, 2025", title:"Java 25 LTS Released", desc:"Java SE 25 reaches general availability as the current Long-Term Support release.", detail:"Java 25 is the fifth Oracle LTS release (joining 8, 11, 17, and 21) and the recommended baseline for new enterprise projects. Oracle's consolidated release notes document JDK 25.0.4 as the July 21, 2026 security update. The next planned LTS is Java 29 in September 2027."},
  {yr:"March 17, 2026", title:"Java 26 Released", desc:"Java SE 26 reaches general availability as the latest non-LTS feature release.", detail:"Java 26 is a regular six-month feature release, not an LTS. Oracle's consolidated release notes list JDK 26.0.2 as the July 21, 2026 security patch. As of July 24, 2026, Java 26 is the latest GA feature release and Java 25 is the latest LTS."}
];

const versionData = [
  {v:"Java 1.0", yr:"Released January 1996", badge:"First Release", features:["Object-Oriented Programming","Platform Independence","Java Virtual Machine (JVM)","Automatic Garbage Collection","Multithreading","Network Programming","Security Sandbox","Abstract Window Toolkit (AWT)"], sig:"The first public release of Java. The HotJava browser demonstrated its capabilities to developers for the first time.", impact:"Established the core promise of Java: write once, run anywhere, powered by the JVM.", code:`import java.awt.Frame;

public class FirstWindow {
    public static void main(String[] args) {
        Frame window = new Frame("Java 1.0");
        window.setSize(320, 200);
        window.setVisible(true);
    }
}`},
  {v:"Java 2 (1998)", yr:"J2SE · J2EE · J2ME", badge:"Platform Split", features:["Swing GUI","Collections Framework","Java 2D Graphics","Improved Security","Better Performance"], sig:"Java split into three editions: J2SE for desktop applications, J2EE for enterprise software and web servers, and J2ME for mobile phones and embedded devices.", impact:"Let Java scale from embedded devices to enterprise servers with a shared language.", code:`import java.util.Vector;

public class JavaTwoCollections {
    public static void main(String[] args) {
        Vector<String> editions = new Vector<>();
        editions.add("J2SE");
        editions.add("J2EE");
        editions.add("J2ME");
        System.out.println(editions);
    }
}`},
  {v:"Java 5", yr:"Released 2004", badge:"Major Update", features:["Generics","Enhanced For Loop","Autoboxing","Enumerations (Enums)","Annotations","Variable Arguments (Varargs)"], sig:"One of the largest updates to the Java language itself.", impact:"Significantly improved programmer productivity and code safety.", code:`import java.util.List;

public class GenericsAndForEach {
    enum Level { BEGINNER, ADVANCED }

    public static void main(String[] args) {
        List<String> features = List.of("Generics", "Enums");
        for (String feature : features) {
            System.out.println(feature);
        }
    }
}`},
  {v:"Java 8", yr:"Released 2014", badge:"Landmark Release", features:["Lambda Expressions","Stream API","Functional Programming","New Date and Time API","Default Methods"], sig:"Considered one of the most important Java releases in the language's history.", impact:"Made Java easier to write and more efficient, bringing functional-style programming to the mainstream.", code:`import java.util.List;

public class StreamsAndLambdas {
    public static void main(String[] args) {
        List<String> names = List.of("Oak", "Java", "JVM");
        names.stream()
             .filter(name -> name.length() > 3)
             .forEach(System.out::println);
    }
}`},
  {v:"Java 9", yr:"Released 2017", badge:"Modularity", features:["Java Platform Module System (Project Jigsaw)","Better JVM performance","Smaller runtime images","Improved documentation tools"], sig:"Introduced the module system, a major structural change to how Java applications are built and packaged.", impact:"Enabled smaller, more efficient deployments of the JVM.", code:`module history.app {
    exports history;
}

// Compile with:
// javac -d out --module-source-path src src/history.app/module-info.java`},
  {v:"Java 11", yr:"LTS since 2018", badge:"Long-Term Support", features:["Long-Term Support release","Part of the new 6-month release cadence"], sig:"One of Java's current Long-Term Support versions, commonly used by businesses.", impact:"Anchor release for the modern, faster Java release cycle.", code:`public class ModernStrings {
    public static void main(String[] args) {
        var message = "  Java 11  ";
        System.out.println(message.strip());
        System.out.println("".isBlank());
    }
}`},
  {v:"Java 17", yr:"LTS · Released 2021", badge:"Long-Term Support", features:["Long-Term Support release","Foundation for modern Java features"], sig:"A current LTS release building on the modern feature set introduced across Java 9–16.", impact:"Widely adopted baseline for contemporary enterprise Java applications.", code:`sealed interface Shape permits Circle, Square {}
record Circle(double radius) implements Shape {}
record Square(double side) implements Shape {}

public class SealedShapes {
    static double area(Shape shape) {
        return switch (shape) {
            case Circle c -> Math.PI * c.radius() * c.radius();
            case Square s -> s.side() * s.side();
        };
    }
}`},
  {v:"Java 21", yr:"LTS · Released 2023", badge:"LTS · 2023", features:["Virtual Threads — Project Loom (JEP 444)","Records (JEP 395)","Sealed Classes (JEP 409)","Pattern Matching for switch (JEP 441)","Text Blocks (JEP 378)","Switch Expressions"], sig:"A major LTS release delivering Virtual Threads — lightweight threads that allow millions of concurrent tasks without the overhead of platform threads.", impact:"Widely adopted enterprise baseline for modern Java concurrency and language ergonomics.", code:`public class VirtualThreads {
    public static void main(String[] args) throws Exception {
        try (var executor = java.util.concurrent.Executors
                .newVirtualThreadPerTaskExecutor()) {
            var task = executor.submit(() -> "Running on a virtual thread");
            System.out.println(task.get());
        }
    }
}`},
  {v:"Java 25", yr:"LTS · September 16, 2025", badge:"Current LTS", features:["Long-Term Support — recommended baseline","Virtual Threads fully finalized","Pattern Matching enhancements","Sequenced Collections","Unnamed Classes and Instance Main Methods","Primitive Types in Patterns","Module Import Declarations"], sig:"Java 25 is the current LTS and fifth in Oracle's LTS series (8, 11, 17, 21, 25). Released September 16, 2025. JDK 25.0.4 is the July 2026 security update.", impact:"The recommended starting point for all new enterprise Java projects as of 2025–2026.", code:`import java.util.SequencedCollection;
import java.util.ArrayList;

public class SequencedData {
    public static void main(String[] args) {
        SequencedCollection<String> releases = new ArrayList<>();
        releases.add("Java 21");
        releases.addFirst("Java 17");
        System.out.println(releases.getFirst());
    }
}`},
  {v:"Java 26", yr:"Feature Release · March 17, 2026", badge:"Latest GA", features:["Non-LTS six-month release","Continuing Project Amber language work","Continuing Project Panama (native interop)","Project Valhalla preview features","JDK 26.0.2 — July 21, 2026 security patch"], sig:"Java 26 reached GA on March 17, 2026. It is a feature release under the six-month cadence — not an LTS — and delivers the newest language experiments.", impact:"Brings preview features and performance improvements; production deployments favouring stability should target Java 25 LTS.", code:`public class PatternMatching {
    static String describe(Object value) {
        return switch (value) {
            case Integer number when number > 0 -> "positive integer";
            case Integer number -> "zero or negative integer";
            case String text -> "text: " + text;
            case null -> "no value";
            default -> "another type";
        };
    }
}`}
];

const peopleData = [
  {name:"James Gosling", role:"Chief Language Designer", init:"JG", img:"James_Gosling.jpg", bio:"Known as the 'Father of Java.' Designed the language from scratch inside the Green Project and created the original virtual machine prototype for Oak in 1992 — the design that evolved into the JVM."},
  {name:"Patrick Naughton", role:"Project Initiator", init:"PN", img:"Patrick_Naughton.jpg", bio:"Wrote the influential memo that proposed the Green Project to Sun leadership. Core day-to-day engineer on the Green Team and a key promoter of Java at its launch."},
  {name:"Mike Sheridan", role:"Project Leader", init:"MS", img:"Mike_Sheridan.jpg", bio:"Managed the Green Team through its early research phase, keeping the project funded and focused inside Sun Microsystems."},
  {name:"Bill Joy", role:"Technical Advisor", init:"BJ", img:"Bill_Joy.jpg", bio:"Co-founder of Sun Microsystems and a key technical voice in Java's strategic direction. Contributed to language design guidance; was not a day-to-day Green Project engineer."},
  {name:"Guy Steele", role:"Language Specification", init:"GS", img:"Guy_Steele.jpg", bio:"Expert programming-language designer who helped refine the Java Language Specification and co-authored the definitive specification book with James Gosling, Bill Joy, and Gilad Bracha."}
];

const factsData = [
  {q:"Naming", p:"Java was almost released as \"Oak\" — but the name was already trademarked, so the team chose \"Java,\" inspired by Java coffee."},
  {q:"Origins", p:"Oak was named after a literal oak tree outside James Gosling's office window. The virtual machine for Oak was designed by Gosling in 1992 — it later evolved into the JVM."},
  {q:"The Slogan", p:"\"Write Once, Run Anywhere\" (WORA) depends on the whole chain: source code compiles to bytecode, which any compliant JVM verifies and runs, with standard APIs defining portable behavior."},
  {q:"Unreleased Hardware", p:"The Star7 PDA — built by the Green Team in 1992 to prove Oak worked across hardware — was never commercially released."},
  {q:"The Price Tag", p:"Oracle completed the acquisition of Sun Microsystems in January 2010 for approximately $7.4 billion, becoming Java's steward alongside the OpenJDK open-source project."},
  {q:"Android's Runtime", p:"Android never used the standard JVM. Early Android ran on Dalvik; today it runs on the Android Runtime (ART). Kotlin is now preferred for new Android development, though Java remains fully supported."},
  {q:"Supreme Court Victory", p:"In April 2021 the U.S. Supreme Court ruled 6–2 in Google's favour in Oracle v. Google, holding that Google's use of 37 Java API packages in Android was fair use."},
  {q:"Release Pace", p:"Since 2018 Java ships a new feature release every six months (March and September). LTS releases — currently Java 8, 11, 17, 21, and 25 — receive extended security updates for enterprise users."}
];

const referenceData = [
  {t:"Oracle, Oracle Java SE Support Roadmap", url:"https://www.oracle.com/java/technologies/java-se-support-roadmap.html"},
  {t:"Oracle, Consolidated JDK 26 Release Notes", url:"https://www.oracle.com/java/technologies/javase/26all-relnotes.html"},
  {t:"Oracle, Consolidated JDK 25 Release Notes", url:"https://www.oracle.com/java/technologies/javase/25all-relnotes.html"},
  {t:"OpenJDK, JDK 25 Project Page", url:"https://openjdk.org/projects/jdk/25/"},
  {t:"JCP, JSR 401: Java SE 26 Final Release", url:"https://jcp.org/aboutJava/communityprocess/final/jsr401/index.html"},
  {t:"Oracle, The Java Language Specification, Preface to the First Edition", url:"https://docs.oracle.com/javase/specs/jls/se7/html/jls-0-preface1.html"},
  {t:"Oracle, The Java Virtual Machine Specification, Preface to the First Edition", url:"https://docs.oracle.com/javase/specs/jvms/se7/html/jvms-0-preface1.html"},
  {t:"Oracle, The Java Language Environment: A White Paper", url:"https://www.oracle.com/java/technologies/introduction-to-java.html"},
  {t:"Computer History Museum, Java Development Begins in Earnest", url:"https://www.computerhistory.org/tdih/april/8/"},
  {t:"Java Community Process, FAQ: General JCP Questions", url:"https://www.jcp.org/en/introduction/faq"},
  {t:"Java Community Process, JCP Procedures Overview", url:"https://www.jcp.org/en/procedures/overview"},
  {t:"Jakarta EE, Frequently Asked Questions", url:"https://jakarta.ee/about/faq/"},
  {t:"Jakarta EE, Jakarta EE 11 Release Page", url:"https://jakarta.ee/release/11/"},
  {t:"Jakarta EE, Javax to Jakarta Namespace Ecosystem Progress", url:"https://jakarta.ee/blogs/javax-jakartaee-namespace-ecosystem-progress/"},
  {t:"Spring, Spring Framework 1.0 Final Released", url:"https://spring.io/blog/2004/03/24/spring-framework-1-0-final-released/"},
  {t:"Spring, Spring Boot 1.0 GA Released", url:"https://spring.io/blog/2014/04/01/spring-boot-1-0-ga-released/"},
  {t:"Spring Framework Wiki, Spring Framework Versions", url:"https://github.com/spring-projects/spring-framework/wiki/Spring-Framework-Versions"},
  {t:"Android Developers, Android's Kotlin-first approach", url:"https://developer.android.com/kotlin/first"},
  {t:"Android Developers, Verifying app behavior on the Android runtime (ART)", url:"https://developer.android.com/guide/practices/verifying-apps-art"},
  {t:"Legal Information Institute, Google LLC v. Oracle America, Inc.", url:"https://www.law.cornell.edu/supremecourt/text/18-956"},
  {t:"OpenJDK, JEP 3: JDK Release Process", url:"https://openjdk.org/jeps/3"},
  {t:"OpenJDK, JEP 395: Records", url:"https://openjdk.org/jeps/395"},
  {t:"OpenJDK, JEP 409: Sealed Classes", url:"https://openjdk.org/jeps/409"},
  {t:"OpenJDK, JEP 441: Pattern Matching for switch", url:"https://openjdk.org/jeps/441"},
  {t:"OpenJDK, JEP 444: Virtual Threads", url:"https://openjdk.org/jeps/444"},
  {t:"OpenJDK, JEP 454: Foreign Function & Memory API", url:"https://openjdk.org/jeps/454"},
  {t:"OpenJDK, JEP 504: Remove the Applet API", url:"https://openjdk.org/jeps/504"},
  {t:"OpenJDK, JEP 248: Make G1 the Default Garbage Collector", url:"https://openjdk.org/jeps/248"},
  {t:"OpenJDK, Project Amber", url:"https://openjdk.org/projects/amber/"},
  {t:"OpenJDK, Project Panama", url:"https://openjdk.org/projects/panama/"},
  {t:"OpenJDK, Project Loom", url:"https://openjdk.org/projects/loom/"},
  {t:"OpenJDK, Project Valhalla", url:"https://openjdk.org/projects/valhalla/"},
  {t:"GraalVM, Native Image", url:"https://docs.oracle.com/en/graalvm/jdk/17/docs/reference-manual/native-image/"},
  {t:"Apache Maven, Introduction to Maven", url:"https://maven.apache.org/what-is-maven.html"},
  {t:"Gradle, Gradle User Manual", url:"https://docs.gradle.org/current/userguide/"},
  {t:"Oracle, Oracle Buys Sun", url:"https://www.oracle.com/corporate/pressrelease/oracle-buys-sun-042009.html"},
  {t:"Oracle SEC filing, Oracle completes acquisition of Sun", url:"https://www.sec.gov/Archives/edgar/data/1341439/000119312510015241/dex991.htm"},
  {t:"OpenJDK, JEP 378: Text Blocks", url:"https://openjdk.org/jeps/378"},
  {t:"OpenJDK, The OpenJDK Developers' Guide", url:"https://openjdk.org/guide/"}
];

const impactData = ["Enterprise applications","Banking & financial systems","Government software","Android applications (via ART)","Web servers & REST APIs","Cloud-native microservices","Big data — Apache Hadoop & Spark","Scientific & research computing","Internet of Things (IoT) devices","Jakarta EE enterprise platforms","Spring Boot applications","GraalVM native images"];

const quizData = [
  {q:"What was Java originally called before its public release?", opts:["Coffee","Oak","Pine","Green"], a:1},
  {q:"In what year was Java 1.0 officially released?", opts:["1991","1995","1996","1998"], a:2},
  {q:"Who is known as the 'Father of Java' and designed the original language and JVM prototype?", opts:["Bill Joy","Patrick Naughton","Guy Steele","James Gosling"], a:3},
  {q:"What does Java's WORA slogan stand for?", opts:["Write Once, Run Anywhere","Write Only, Read Always","Work Once, Run Always","Write Once, Read Anywhere"], a:0},
  {q:"Which company acquired Sun Microsystems in January 2010?", opts:["Microsoft","IBM","Oracle","Google"], a:2},
  {q:"Which Java 8 feature introduced functional-style programming?", opts:["Generics","Lambda Expressions","Modules","Records"], a:1},
  {q:"Which JEP number introduced Virtual Threads (Project Loom) in Java 21?", opts:["JEP 378","JEP 409","JEP 441","JEP 444"], a:3},
  {q:"What is the current LTS version of Java?", opts:["Java 17","Java 21","Java 25","Java 26"], a:2}
];

/* =========================================================
   RENDER: TIMELINE
   ========================================================= */
const timelineWrap = document.getElementById('timelineWrap');
timelineData.forEach((item,i)=>{
  const el = document.createElement('div');
  el.className = 't-item reveal';
  el.innerHTML = `
    <div class="t-node" aria-hidden="true"></div>
    <div class="t-card" tabindex="0" role="button" aria-haspopup="dialog" data-idx="${i}">
      <div class="t-year">${item.yr}</div>
      <div class="t-title">${item.title}</div>
      <div class="t-desc">${item.desc}</div>
      <div class="t-hint">→ expand for details</div>
    </div>`;
  timelineWrap.appendChild(el);
});

/* =========================================================
   RENDER: VERSIONS
   ========================================================= */
const versionGrid = document.getElementById('versionGrid');
versionData.forEach((v,i)=>{
  const el = document.createElement('div');
  el.className = 'v-card reveal-zoom';
  el.tabIndex = 0;
  el.setAttribute('role','button');
  el.dataset.vidx = i;
  el.innerHTML = `
    <span class="v-badge">${v.badge}</span>
    <h3>${v.v}</h3>
    <div class="v-year">${v.yr}</div>
    <div class="v-feat">${v.features.slice(0,3).join(' · ')}${v.features.length>3 ? ' …' : ''}</div>`;
  versionGrid.appendChild(el);
});

/* =========================================================
   RENDER: PEOPLE
   ========================================================= */
const peopleGrid = document.getElementById('peopleGrid');
peopleData.forEach(p=>{
  const el = document.createElement('div');
  el.className = 'person';
  el.innerHTML = `<div class="p-avatar">${p.img ? `<img src="${p.img}" alt="${p.name}">` : p.init}</div><h4>${p.name}</h4><p style="color:var(--orange);font-size:12px;margin-bottom:8px;font-family:var(--font-mono);">${p.role}</p><p>${p.bio}</p>`;
  peopleGrid.appendChild(el);
});

/* =========================================================
   RENDER: FACTS
   ========================================================= */
const factsGrid = document.getElementById('factsGrid');
factsData.forEach(f=>{
  const el = document.createElement('div');
  el.className = 'fact-card reveal-zoom';
  el.innerHTML = `<div class="q">${f.q}</div><p>${f.p}</p>`;
  factsGrid.appendChild(el);
});

/* =========================================================
   RENDER: REFERENCES
   ========================================================= */
const refList = document.getElementById('refList');
referenceData.forEach((r,i)=>{
  const el = document.createElement('div');
  el.className = 'ref-item';
  el.innerHTML = `<span class="ref-num">${String(i+1).padStart(2,'0')}</span><span>${r.url ? `<a href="${r.url}" target="_blank" rel="noopener">${r.t}</a>` : `<span class="ref-meta">${r.t}</span>`}</span>`;
  refList.appendChild(el);
});

/* =========================================================
   MODAL
   ========================================================= */
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
let lastFocused = null;

function openModal(html){
  lastFocused = document.activeElement;
  modalContent.innerHTML = html;
  modalOverlay.classList.add('open');
  document.getElementById('modalClose').focus();
  document.body.style.overflow='hidden';
}
function closeModal(){
  modalOverlay.classList.remove('open');
  document.body.style.overflow='';
  if(lastFocused) lastFocused.focus();
}
document.getElementById('modalClose').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e=>{ if(e.target===modalOverlay) closeModal(); });
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });

timelineWrap.addEventListener('click', e=>{
  const card = e.target.closest('.t-card');
  if(!card) return;
  const d = timelineData[card.dataset.idx];
  openModal(`<span class="t-year">${d.yr}</span><h3 id="modalTitle">${d.title}</h3><p>${d.detail}</p>`);
});
timelineWrap.addEventListener('keydown', e=>{
  const card = e.target.closest('.t-card');
  if(!card) return;
  if(e.key==='Enter' || e.key===' '){ e.preventDefault(); card.click(); }
});

versionGrid.addEventListener('click', e=>{
  const card = e.target.closest('.v-card');
  if(!card) return;
  const v = versionData[card.dataset.vidx];
  openModal(`
    <span class="t-year">${v.yr}</span>
    <h3 id="modalTitle">${v.v}</h3>
    <p style="color:var(--white);margin-bottom:16px;">${v.sig}</p>
    <p style="font-family:var(--font-mono);font-size:11px;color:var(--blue-bright);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Features</p>
    <ul style="padding-left:18px;color:var(--muted);margin-bottom:16px;">${v.features.map(f=>`<li style="margin-bottom:4px;">${f}</li>`).join('')}</ul>
    <p style="font-family:var(--font-mono);font-size:11px;color:var(--blue-bright);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Impact on Developers</p>
    <p>${v.impact}</p>
    <div class="modal-code">
      <div class="code-heading">
        <h3>Sample code</h3>
        <button class="copy-code" type="button" data-copy-target="modalCodeBlock" aria-label="Copy code" title="Copy code">⿻</button>
      </div>
      <pre class="code-block" id="modalCodeBlock"><code>${escapeHtml(v.code)}</code></pre>
    </div>
  `);
});
versionGrid.addEventListener('keydown', e=>{
  const card = e.target.closest('.v-card');
  if(!card) return;
  if(e.key==='Enter' || e.key===' '){ e.preventDefault(); card.click(); }
});

function escapeHtml(value){
  return value.replace(/[&<>"']/g, character => ({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&#039;'
  }[character]));
}

async function copyCode(button){
  const target = document.getElementById(button.dataset.copyTarget);
  if(!target) return;
  const code = target.querySelector('code')?.textContent || target.textContent || '';
  try{
    if(navigator.clipboard && window.isSecureContext){
      await navigator.clipboard.writeText(code);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = code;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
    }
    button.classList.add('copied');
    showCopyToast();
    setTimeout(()=>{ button.classList.remove('copied'); }, 1600);
  } catch(error){
    button.setAttribute('aria-label','Copy failed');
    button.setAttribute('title','Copy failed');
    setTimeout(()=>{
      button.setAttribute('aria-label','Copy code');
      button.setAttribute('title','Copy code');
    }, 1600);
  }
}

let toastTimer;
function showCopyToast(){
  const toast = document.getElementById('copy-toast');
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove('show'), 900);
}

document.addEventListener('click', e=>{
  const button = e.target.closest('.copy-code');
  if(button) copyCode(button);
});

/* =========================================================
   ACCORDION
   ========================================================= */
document.querySelectorAll('.acc-head').forEach(head=>{
  head.addEventListener('click', ()=>{
    head.parentElement.classList.toggle('open');
  });
});

/* =========================================================
   QUIZ
   ========================================================= */
const quizBox = document.getElementById('quizBox');
let qIndex = 0, qScore = 0, answered = false;

function renderQuiz(){
  if(qIndex >= quizData.length){
    quizBox.innerHTML = `
      <div class="quiz-result">
        <div class="score">${qScore}/${quizData.length}</div>
        <p>${qScore===quizData.length ? "Perfect score — you know your Java history!" : qScore >= quizData.length/2 ? "Nice work — solid grasp of Java's story." : "Take another lap through the timeline and try again."}</p>
        <button class="quiz-retry" id="retryBtn">Retry Quiz</button>
      </div>`;
    document.getElementById('retryBtn').addEventListener('click', ()=>{ qIndex=0; qScore=0; renderQuiz(); });
    return;
  }
  const item = quizData[qIndex];
  answered = false;
  quizBox.innerHTML = `
    <div class="quiz-progress"><div class="quiz-progress-fill" style="width:${(qIndex/quizData.length)*100}%"></div></div>
    <div class="quiz-count">Question ${qIndex+1} of ${quizData.length}</div>
    <div class="quiz-q" style="margin-top:8px;">${item.q}</div>
    <div class="quiz-opts">
      ${item.opts.map((o,i)=>`<button class="quiz-opt" data-i="${i}">${o}</button>`).join('')}
    </div>
    <div class="quiz-footer">
      <span></span>
      <button class="quiz-next" id="nextBtn">${qIndex===quizData.length-1 ? 'See Results' : 'Next Question'} →</button>
    </div>`;
  quizBox.querySelectorAll('.quiz-opt').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      if(answered) return;
      answered = true;
      const chosen = parseInt(btn.dataset.i);
      quizBox.querySelectorAll('.quiz-opt').forEach(b=>b.disabled=true);
      if(chosen === item.a){
        btn.classList.add('correct');
        qScore++;
      } else {
        btn.classList.add('wrong');
        quizBox.querySelector(`.quiz-opt[data-i="${item.a}"]`).classList.add('correct');
      }
      document.getElementById('nextBtn').classList.add('show');
    });
  });
  document.getElementById('nextBtn').addEventListener('click', ()=>{
    qIndex++;
    renderQuiz();
  });
}
renderQuiz();

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
const revealEls = document.querySelectorAll('.reveal, .reveal-zoom');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      en.target.classList.add('in');
      io.unobserve(en.target);
    }
  });
}, {threshold:0});
revealEls.forEach(el=>io.observe(el));

/* =========================================================
   NAV: active section + scroll progress + toggle
   ========================================================= */
const sections = document.querySelectorAll('section[id]');
const navLinksEls = document.querySelectorAll('.nav-link');
const progressBar = document.getElementById('progressBar');

function onScroll(){
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (docHeight>0 ? (scrollTop/docHeight)*100 : 0) + '%';

  let current = 'hero';
  sections.forEach(sec=>{
    const rect = sec.getBoundingClientRect();
    if(rect.top <= 140 && rect.bottom >= 140) current = sec.id;
  });
  // Near the bottom of the page there's no more room to scroll, so a short
  // final section can pass the 140px trigger point without ever satisfying
  // it. Force the last section active once we've hit (or nearly hit) the
  // bottom of the document.
  if(scrollTop + window.innerHeight >= docHeight - 2 && sections.length){
    current = sections[sections.length - 1].id;
  }
  navLinksEls.forEach(l=> l.classList.toggle('active', l.dataset.sec===current));
}
document.addEventListener('scroll', onScroll, {passive:true});
onScroll();

document.getElementById('beginJourney').addEventListener('click', ()=>{
  document.getElementById('timeline').scrollIntoView({behavior:'smooth'});
});

const navToggle = document.getElementById('navToggle');
const navLinksBox = document.getElementById('navLinks');
navToggle.addEventListener('click', ()=>{
  const open = navLinksBox.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
navLinksBox.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> {
  navLinksBox.classList.remove('open');
  navToggle.setAttribute('aria-expanded','false');
}));

/* =========================================================
   HERO COUNTERS
   ========================================================= */
document.querySelectorAll('.hero-stat .num').forEach(el=>{
  const target = parseInt(el.dataset.count, 10);
  let started = false;
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(en.isIntersecting && !started){
        started = true;
        let cur = 0;
        const step = Math.max(1, Math.ceil(target/40));
        const t = setInterval(()=>{
          cur += step;
          if(cur >= target){ cur = target; clearInterval(t); }
          el.textContent = cur;
        }, 30);
      }
    });
  });
  obs.observe(el);
});

/* =========================================================
   RIPPLE ON CTA
   ========================================================= */
document.getElementById('beginJourney').addEventListener('click', function(e){
  const btn = this;
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.left = (e.clientX-rect.left)+'px';
  ripple.style.top = (e.clientY-rect.top)+'px';
  ripple.style.width = ripple.style.height = '10px';
  btn.appendChild(ripple);
  setTimeout(()=>ripple.remove(), 650);
});

/* =========================================================
   AMBIENT JAVA CODE BACKDROP
   ========================================================= */
const codeSnippet = `public class JavaHistory {
    public static void main(String[] args) {
        String slogan = "Write Once, Run Anywhere";
        JVM jvm = new JVM();
        jvm.run(slogan);
    }
}

interface Portable {
    void runAnywhere();
}

abstract class Language {
    protected String name;
    protected int releaseYear;

    public Language(String name, int year) {
        this.name = name;
        this.releaseYear = year;
    }

    abstract String describe();
}

class Oak extends Language {
    public Oak() {
        super("Oak", 1991);
    }

    String describe() {
        return name + " born " + releaseYear;
    }
}

class Java extends Language implements Portable {
    private List<Feature> features = new ArrayList<>();

    public Java() {
        super("Java", 1995);
    }

    public void runAnywhere() {
        System.out.println("JVM engaged");
    }

    String describe() {
        return name + " since " + releaseYear;
    }
}

enum Edition {
    STANDARD, ENTERPRISE, MICRO
}

@FunctionalInterface
interface Callback<T> {
    T apply(T input);
}

try {
    Connection conn = DriverManager.getConnection(url);
    conn.setAutoCommit(false);
} catch (SQLException e) {
    e.printStackTrace();
} finally {
    System.gc();
}

for (Feature f : features) {
    if (f.isStable()) {
        System.out.println(f.getName());
    }
}

Thread worker = new Thread(() -> {
    System.out.println("Concurrent execution");
});
worker.start();

public record Version(int major, int minor) {
    public String label() {
        return major + "." + minor;
    }
}

switch (edition) {
    case STANDARD -> deployDesktop();
    case ENTERPRISE -> deployServer();
    case MICRO -> deployEmbedded();
}
`;
const bgCode = document.getElementById('bgCode');
if(bgCode){ bgCode.textContent = (codeSnippet + '\n').repeat(4); }

/* =========================================================
   HERO STAT NUMBERS — cursor magnetic + scramble
   ========================================================= */
const statNums = document.querySelectorAll('.hero-stat .num');
const statState = Array.from(statNums).map(el=>({el,close:false}));
const statObs = new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    const s = statState.find(x=>x.el===en.target);
    if(!s) return;
    if(en.isIntersecting){
      const target=parseInt(s.el.dataset.count,10);
      let cur=0,step=Math.max(1,Math.ceil(target/30));
      clearInterval(s.timer);
      s.timer=setInterval(()=>{cur+=step;if(cur>=target){cur=target;clearInterval(s.timer);}s.el.textContent=cur;},22);
    } else {
      clearInterval(s.timer);
      s.el.textContent=0;
    }
  });
},{threshold:0});
statState.forEach(s=>statObs.observe(s.el));

/* =========================================================
   CREDITS: exact bottom padding so nav scroll aligns
   ========================================================= */
function fixCreditsBottom(){
  const credits = document.getElementById('credits');
  credits.style.paddingBottom = '0px';
  const scrollPad = 90;
  const creditsTop = credits.getBoundingClientRect().top + window.scrollY;
  const needed = creditsTop - scrollPad + window.innerHeight;
  const extra = Math.max(0, needed - document.documentElement.scrollHeight);
  credits.style.paddingBottom = extra + 'px';
}
fixCreditsBottom();
window.addEventListener('resize', fixCreditsBottom);

