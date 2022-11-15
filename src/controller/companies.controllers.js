import Company from './../models/company.js';

export const findAllCompanies = async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
}

export const createCompany = async (req, res) => {
  try {
    const newCompany = new Company({
      name: req.body.name,
      isActive: req.body.isActive,
      address: req.body.address,
      logo: ''
    });
    const companySaved = await newCompany.save();
    res.json(companySaved);
  } catch (error) {
    res.status(500).json({ message: error.message || 'error create company' });
  }
}

export const updateCompany = async (req, res) => {
  try {
    await Company.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Company was updated" });
  } catch (error) {
    res.status(500).json({ message: error.message || 'error update company' });
  }
}


export const findOneCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    res.json(company);
  } catch (error) {
    res.status(500).json({ message: error.message || 'error find company' });
  }
}

export const deleteCompany = async (req, res) => {
  try {
    const data = await Company.findByIdAndDelete(req.params.id);
    res.json({ message: "Company were deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message || 'error delete company' });
  }
}