# config/cloudprovideraccess/TestAccCloudProviderAccessSetupAzure_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 42) FAIL
Success rate: 97.67%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-25 00:29](#error-2025-09-25t0029480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68d48c4a8256687520047d11/cloudProviderAccess | dev | flaky_500 | 1.05s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 3 seconds
- 2025-09-04 PASS 2 seconds
- 2025-09-05 PASS 3 seconds
- 2025-09-06 PASS 3 seconds
- 2025-09-07 PASS 2 seconds
- 2025-09-08
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-09-09 PASS 3 seconds
- 2025-09-10 PASS 3 seconds
- 2025-09-11 PASS 3 seconds
- 2025-09-12 PASS 3 seconds
- 2025-09-13 PASS 4 seconds
- 2025-09-14 PASS 2 seconds
- 2025-09-15
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-09-16 PASS 2 seconds
- 2025-09-17 PASS 3 seconds
- 2025-09-18 PASS 4 seconds
- 2025-09-19 PASS 2 seconds
- 2025-09-20 PASS 4 seconds
- 2025-09-21 PASS 3 seconds
- 2025-09-22 PASS 3 seconds
- 2025-09-23 PASS 2 seconds
- 2025-09-24 PASS 2 seconds
- 2025-09-25

### Error 2025-09-25T00:29:48+00:00
```
2025-09-25T00:29:48.9414814Z === RUN   TestAccCloudProviderAccessSetupAzure_basic
2025-09-25T00:29:48.9416978Z === CONT  TestAccCloudProviderAccessSetupAzure_basic
2025-09-25T00:29:48.9429903Z === NAME  TestAccCloudProviderAccessSetupAzure_basic
2025-09-25T00:29:48.9430524Z     resource_cloud_provider_access_setup_test.go:44: Step 1/1 error: Error running apply: exit status 1
2025-09-25T00:29:48.9430978Z         
2025-09-25T00:29:48.9432606Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d48c4a8256687520047d11/cloudProviderAccess POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-25T00:29:48.9433741Z         
2025-09-25T00:29:48.9434122Z           with mongodbatlas_cloud_provider_access_setup.test,
2025-09-25T00:29:48.9435044Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "test":
2025-09-25T00:29:48.9435735Z           12: 	resource "mongodbatlas_cloud_provider_access_setup" "test" {
2025-09-25T00:29:48.9436083Z         
2025-09-25T00:29:48.9436367Z --- FAIL: TestAccCloudProviderAccessSetupAzure_basic (1.54s)
```

- 2025-09-26 PASS 3 seconds
- 2025-09-27 PASS 4 seconds
- 2025-09-28 PASS 2 seconds
- 2025-09-29 PASS 2 seconds
- 2025-09-30
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 2 seconds
- 2025-10-01
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-10-02 PASS 3 seconds