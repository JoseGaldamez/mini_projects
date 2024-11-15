/* eslint-disable @next/next/no-img-element */
import { SingleCharacter } from "@/models/SingleCharacter";

interface IPropsSingleCharacter {
    params: Promise<{ id: string }>
}

// crear la función que solite la información
const getSingleCharacter = async (id: string) => {
    const requestApi = await fetch("https://dragonball-api.com/api/characters/" + id)
    const data: SingleCharacter = await requestApi.json();
    return data;
}

const SingleCharacterById = async ({ params }: IPropsSingleCharacter) => {

    const { id } = await params;

    // validar los parametros
    if (!id) {
        return {
            notFound: true
        }
    }


    // llamar la función que nos solicite los datos de la API
    // asignarla a una varaible
    const character = await getSingleCharacter(id);

    return (
        <div>
            <header className="bg-slate-900 text-white p-5 text-center" >
                <h1>Dragon Ball Charactes</h1>
            </header>
            <main className="max-w-4xl mx-auto py-5">

                <section className="flex justify-between items-start">
                    <div className="w-1/3">
                        <img className="h-60 mx-auto" src={character.image} alt={character.name} />
                    </div>
                    <div className="w-2/3">
                        <h2 className="font-bold text-2xl">
                            {
                                character.name
                            } <span className="font-normal text-gray-500 text-sm"> {character.race} </span>
                        </h2>
                        <p>
                            {
                                character.description
                            }
                        </p>
                    </div>

                </section>
                <section>
                    {
                        character.transformations.length == 0 && (
                            <p>Este personaje no tiene transformaciones.</p>
                        )
                    }
                    {
                        character.transformations.length > 0 && (
                            <div className="flex gap-5 flex-wrap mt-10">
                                {
                                    character.transformations.map((transformation) => {
                                        return (
                                            <div key={transformation.id} className="text-center p-5 bg-slate-100 rounded">
                                                <img className="h-20 mx-auto" src={transformation.image} alt={transformation.name} />
                                                <h4>
                                                    {
                                                        transformation.name
                                                    }
                                                </h4>
                                            </div>)
                                    })
                                }
                            </div>
                        )
                    }
                </section>

            </main>
        </div>
    )
}

export default SingleCharacterById;