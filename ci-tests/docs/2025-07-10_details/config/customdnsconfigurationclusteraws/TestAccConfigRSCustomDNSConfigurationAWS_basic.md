# config/customdnsconfigurationclusteraws/TestAccConfigRSCustomDNSConfigurationAWS_basic Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL(x 3)
Success rate: 97.39%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029520000) |  | qa |  | 0.10s
[2025-06-05 00:30](#error-2025-06-05t0030450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 3.09s
[2025-07-06 00:33](#error-2025-07-06t0033170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40d7267b5775b68330e/limits | qa | flaky_500 | 36.03s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 9 seconds
- 2025-04-13 PASS 13 seconds
- 2025-04-14 PASS 9 seconds
- 2025-04-15 PASS 12 seconds
- 2025-04-16
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-04-17 PASS 10 seconds
- 2025-04-18 PASS 9 seconds
- 2025-04-19 PASS 16 seconds
- 2025-04-20 PASS 11 seconds
- 2025-04-21 PASS 22 seconds
- 2025-04-22 PASS 9 seconds
- 2025-04-23 PASS 10 seconds
- 2025-04-24 PASS 20 seconds
- 2025-04-25 PASS 9 seconds
- 2025-04-26 PASS 19 seconds
- 2025-04-27 PASS 23 seconds
- 2025-04-28 PASS 20 seconds
- 2025-04-29 PASS 11 seconds
- 2025-04-30
  - PASS 15 seconds
  - PASS 16 seconds
- 2025-05-01
  - PASS 14 seconds
  - PASS 21 seconds
  - PASS 11 seconds
  - PASS 13 seconds
  - PASS 9 seconds
  - PASS 19 seconds
  - PASS 11 seconds
- 2025-05-02 PASS 17 seconds
- 2025-05-03 PASS 13 seconds
- 2025-05-04 PASS 15 seconds
- 2025-05-05 PASS 23 seconds
- 2025-05-06 PASS 13 seconds
- 2025-05-07 PASS 10 seconds
- 2025-05-08 PASS 13 seconds
- 2025-05-09 PASS 23 seconds
- 2025-05-10 PASS 12 seconds
- 2025-05-11

### Error 2025-05-11T00:29:52+00:00
```
2025-05-11T00:29:52.9345007Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-05-11T00:29:52.9347376Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-05-11T00:29:52.9470460Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-05-11T00:29:52.9471844Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2025-05-11T00:29:52.9472749Z         
2025-05-11T00:29:52.9473524Z         Error: error creating project: test-acc-tf-p-5086026969643001326
2025-05-11T00:29:52.9474274Z         
2025-05-11T00:29:52.9474835Z           with mongodbatlas_project.test,
2025-05-11T00:29:52.9475930Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:52.9477182Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:52.9477717Z         
2025-05-11T00:29:52.9478622Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:52.9479354Z         type
2025-05-11T00:29:52.9479922Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (0.96s)
```

- 2025-05-12 PASS 9 seconds
- 2025-05-13
  - PASS 21 seconds
  - PASS 9 seconds
- 2025-05-14 PASS 10 seconds
- 2025-05-15 PASS 17 seconds
- 2025-05-16 PASS 19 seconds
- 2025-05-17 PASS 9 seconds
- 2025-05-18 PASS 18 seconds
- 2025-05-19 PASS 13 seconds
- 2025-05-20 PASS 16 seconds
- 2025-05-21 PASS 10 seconds
- 2025-05-22 PASS 9 seconds
- 2025-05-23 PASS 10 seconds
- 2025-05-24 PASS 12 seconds
- 2025-05-25 PASS 14 seconds
- 2025-05-26 PASS 13 seconds
- 2025-05-27 PASS 14 seconds
- 2025-05-28
  - PASS 23 seconds
  - PASS 13 seconds
  - PASS 12 seconds
- 2025-05-29 PASS 16 seconds
- 2025-05-30 PASS 20 seconds
- 2025-05-31 PASS 22 seconds
- 2025-06-01
  - PASS 10 seconds
  - PASS 13 seconds
  - PASS 10 seconds
  - PASS 14 seconds
  - PASS 18 seconds
  - PASS 11 seconds
- 2025-06-02
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 17 seconds
- 2025-06-03 PASS 17 seconds
- 2025-06-04 PASS 16 seconds
- 2025-06-05

### Error 2025-06-05T00:30:45+00:00
```
2025-06-05T00:30:45.1228088Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-06-05T00:30:45.1229295Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-06-05T00:30:45.1257856Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-06-05T00:30:45.1258528Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:30:45.1259024Z         
2025-06-05T00:30:45.1259454Z         Error: error creating project: test-acc-tf-p-1038601512409329519
2025-06-05T00:30:45.1259819Z         
2025-06-05T00:30:45.1260133Z           with mongodbatlas_project.test,
2025-06-05T00:30:45.1260734Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:30:45.1261289Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:30:45.1261707Z         
2025-06-05T00:30:45.1262188Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:30:45.1262820Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:30:45.1263399Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:30:45.1263861Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (3.88s)
```

- 2025-06-06 PASS 13 seconds
- 2025-06-07 PASS 21 seconds
- 2025-06-08 PASS 9 seconds
- 2025-06-09 PASS 10 seconds
- 2025-06-10 PASS 22 seconds
- 2025-06-11
  - PASS 21 seconds
  - PASS 11 seconds
- 2025-06-12 PASS 11 seconds
- 2025-06-13 PASS 12 seconds
- 2025-06-14 PASS 17 seconds
- 2025-06-15 PASS 9 seconds
- 2025-06-16 PASS 22 seconds
- 2025-06-17 PASS 22 seconds
- 2025-06-18
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-06-19 PASS 10 seconds
- 2025-06-20 PASS 21 seconds
- 2025-06-21 PASS 11 seconds
- 2025-06-22 PASS 19 seconds
- 2025-06-23 PASS 21 seconds
- 2025-06-24 PASS 12 seconds
- 2025-06-25 PASS 12 seconds
- 2025-06-26 PASS 17 seconds
- 2025-06-27 PASS 21 seconds
- 2025-06-28 PASS 9 seconds
- 2025-06-29 PASS 8 seconds
- 2025-06-30 PASS 22 seconds
- 2025-07-01
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 22 seconds
  - PASS 10 seconds
  - PASS 19 seconds
  - PASS 9 seconds
- 2025-07-02 PASS 10 seconds
- 2025-07-03 PASS 19 seconds
- 2025-07-04 PASS 13 seconds
- 2025-07-05 PASS 24 seconds
- 2025-07-06

### Error 2025-07-06T00:33:17+00:00
```
2025-07-06T00:33:17.8444644Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-07-06T00:33:17.8446812Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-07-06T00:33:17.8472770Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2025-07-06T00:33:17.8474544Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:33:17.8476089Z         
2025-07-06T00:33:17.8476941Z         Error: error when getting project properties after create
2025-07-06T00:33:17.8478583Z         
2025-07-06T00:33:17.8480198Z           with mongodbatlas_project.test,
2025-07-06T00:33:17.8481657Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:33:17.8482824Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:33:17.8483518Z         
2025-07-06T00:33:17.8484495Z         error getting project (6869c40d7267b5775b68330e): error getting project's
2025-07-06T00:33:17.8485857Z         limits (6869c40d7267b5775b68330e):
2025-07-06T00:33:17.8487243Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40d7267b5775b68330e/limits
2025-07-06T00:33:17.8488739Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:33:17.8489914Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:33:17.8490757Z         BadRequestDetail: 
2025-07-06T00:33:17.8507523Z   
2025-07-06T00:33:17.8522329Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (36.31s)
```

- 2025-07-07 PASS 10 seconds
- 2025-07-08 PASS 22 seconds
- 2025-07-09 PASS 20 seconds
- 2025-07-10 PASS 10 seconds