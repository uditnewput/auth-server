import * as AuthService from '../services/auth.service'

export const getIframeSrc = async (req, res) => {
    const reqData = req.query;
    const iframeSrc = await AuthService.getIframeSrc(reqData);
    res.json(iframeSrc);
}