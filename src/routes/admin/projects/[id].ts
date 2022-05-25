export async function get({ params }: any) {
    return {
        body: { id: parseInt(params.id) }
    }
}
