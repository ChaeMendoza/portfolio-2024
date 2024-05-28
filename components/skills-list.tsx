import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={skills} />
        </div>
    );
}
export const skills = [
    {
        id: 0,
        title: "HTML",
        description:
            "Frontend",
        src: "/img-sources/html.png",
    },
    {
        id: 1,
        title: "CSS",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        src: "/img-sources/css.png",
    },
    {
        id: 2,
        title: "JavaScript",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        src: "/img-sources/js.jpg",
    },
    {
        id: 3,
        title: "React JS",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        src: "/img-sources/react.png",
    },
    {
        id: 4,
        title: "Tailwind CSS",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        src: "/img-sources/tailwind.png",
    },
    {
        id: 5,
        title: "Django",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        src: "/img-sources/django.png",
    },
    {
        id: 6,
        title: "Odoo Enterprise",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        src: "/img-sources/odoo.png",
    },
    {
        id: 7,
        title: "Python",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        src: "/img-sources/python.png",
    },
    {
        id: 8,
        title: "PostgreSql",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        src: "/img-sources/postgresql.png",
    },
    {
        id: 9,
        title: "Node JS",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        src: "/img-sources/node.png",
    },
    {
        id: 10,
        title: "MYSQL",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        src: "/img-sources/sql.png",
    },
    {
        id: 11,
        title: "Git",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        src: "/img-sources/git.png",
    },
];
