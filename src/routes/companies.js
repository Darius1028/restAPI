import { Router } from "express"
import * as CompanyController from './../controller/companies.controllers.js'

const companyRoutes = Router();

companyRoutes.get("/", CompanyController.findAllCompanies);
companyRoutes.post("/", CompanyController.createCompany);
companyRoutes.get("/filter", CompanyController.filterCompanies);
companyRoutes.get("/:id", CompanyController.findOneCompany);
companyRoutes.delete("/:id", CompanyController.deleteCompany);
companyRoutes.put("/:id", CompanyController.updateCompany);

export default companyRoutes;