interface IGetPropsParams {
    params: {
        id: string
    }
}

interface IGetPropsReturn {
    body: {
        id: number
    }
}
export async function get({ params }: IGetPropsParams): Promise<IGetPropsReturn> {
    return {
        body: { id: parseInt(params.id) }
    }
}
