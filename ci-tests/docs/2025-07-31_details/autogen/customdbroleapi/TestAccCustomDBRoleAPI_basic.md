# autogen/customdbroleapi/TestAccCustomDBRoleAPI_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:56](#error-2025-07-06t0056240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c45c690ae45e168be415/limits | qa | flaky_500 | 35.03s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 6 seconds
- 2025-07-03 PASS 9 seconds
- 2025-07-04 PASS 12 seconds
- 2025-07-05 PASS 7 seconds
- 2025-07-06

### Error 2025-07-06T00:56:24+00:00
```
2025-07-06T00:56:24.9088697Z === RUN   TestAccCustomDBRoleAPI_basic
2025-07-06T00:56:24.9089464Z === CONT  TestAccCustomDBRoleAPI_basic
2025-07-06T00:56:24.9104039Z   
2025-07-06T00:56:24.9104702Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2025-07-06T00:56:24.9105357Z         
2025-07-06T00:56:24.9106060Z         Error: error when getting project properties after create
2025-07-06T00:56:24.9106668Z         
2025-07-06T00:56:24.9107156Z           with mongodbatlas_project.test,
2025-07-06T00:56:24.9107745Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:56:24.9108290Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:56:24.9108570Z         
2025-07-06T00:56:24.9109004Z         error getting project (6869c45c690ae45e168be415): error getting project's
2025-07-06T00:56:24.9109444Z         limits (6869c45c690ae45e168be415):
2025-07-06T00:56:24.9110268Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c45c690ae45e168be415/limits
2025-07-06T00:56:24.9110955Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:56:24.9111517Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:56:24.9111899Z         BadRequestDetail: 
2025-07-06T00:56:24.9112175Z --- FAIL: TestAccCustomDBRoleAPI_basic (35.30s)
```

- 2025-07-07 PASS 7 seconds
- 2025-07-08 PASS 8 seconds
- 2025-07-09 PASS 8 seconds
- 2025-07-10
  - PASS 7 seconds
  - PASS 12 seconds
- 2025-07-11 PASS 7 seconds
- 2025-07-12 PASS 8 seconds
- 2025-07-13 PASS 18 seconds
- 2025-07-14 PASS 11 seconds
- 2025-07-15 PASS 10 seconds
- 2025-07-16 PASS 12 seconds
- 2025-07-17 PASS 14 seconds
- 2025-07-18 PASS 7 seconds
- 2025-07-19 PASS 7 seconds
- 2025-07-20 PASS 13 seconds
- 2025-07-21 PASS 6 seconds
- 2025-07-22 PASS 8 seconds
- 2025-07-23
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-07-24 PASS 9 seconds
- 2025-07-25 PASS 10 seconds
- 2025-07-26 PASS 7 seconds
- 2025-07-27 PASS 8 seconds
- 2025-07-28 PASS 9 seconds
- 2025-07-29 PASS 10 seconds
- 2025-07-30 PASS 7 seconds
- 2025-07-31 PASS 9 seconds