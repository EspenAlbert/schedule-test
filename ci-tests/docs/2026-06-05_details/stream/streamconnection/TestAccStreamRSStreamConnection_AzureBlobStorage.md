# stream/streamconnection/TestAccStreamRSStreamConnection_AzureBlobStorage Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 33) FAIL(x 2)
Success rate: 94.29%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-07 10:32](#error-2026-05-07t1032420000) | DUPLICATE_AZURE_SERVICE_PRINCIPAL /api/atlas/v2/groups/69fc5c76f696c64139d0b25b/cloudProviderAccess | dev | 204.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 4 minutes
  - FAIL 3 minutes

### Error 2026-05-07T10:32:42+00:00
```
2026-05-07T10:32:42.9716753Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-07T10:32:42.9728900Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-07T10:32:42.9813236Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-07T10:32:42.9813865Z     resource_stream_connection_test.go:1309: Step 1/2 error: Error running apply: exit status 1
2026-05-07T10:32:42.9814309Z         
2026-05-07T10:32:42.9816533Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/69fc5c76f696c64139d0b25b/cloudProviderAccess POST: HTTP 409 Conflict (Error code: "DUPLICATE_AZURE_SERVICE_PRINCIPAL") Detail: An Azure Service Principal has already been configured for the specified Azure Service Principal ID (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1). Reason: Conflict. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-05-07T10:32:42.9818269Z         
2026-05-07T10:32:42.9818724Z           with mongodbatlas_cloud_provider_access_setup.azure_setup,
2026-05-07T10:32:42.9819523Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_cloud_provider_access_setup" "azure_setup":
2026-05-07T10:32:42.9820291Z           31: 		resource "mongodbatlas_cloud_provider_access_setup" "azure_setup" {
2026-05-07T10:32:42.9820966Z         
2026-05-07T10:32:42.9822356Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStorage (204.50s)
```

- 2026-05-08 PASS 3 minutes
- 2026-05-09
  - PASS 4 minutes
  - PASS 45 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 37 minutes
- 2026-05-12 PASS 6 minutes
- 2026-05-13 PASS 7 minutes
- 2026-05-14 PASS 6 minutes
- 2026-05-15 PASS 3 minutes
- 2026-05-16 PASS 4 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 49 minutes
- 2026-05-19 PASS 32 minutes
- 2026-05-20
  - PASS 6 minutes
  - PASS 6 minutes
- 2026-05-21 PASS 6 minutes
- 2026-05-22 PASS an hour
- 2026-05-23 PASS 36 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 37 minutes
- 2026-05-26 PASS 3 minutes
- 2026-05-27 PASS 3 minutes
- 2026-05-28 PASS 4 minutes
- 2026-05-29 PASS 3 minutes
- 2026-05-30 PASS 3 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 3 minutes
- 2026-06-02 PASS 3 minutes
- 2026-06-03 PASS 3 minutes
- 2026-06-04 PASS 3 minutes
- 2026-06-05 PASS 3 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-10 02:24](#error-2026-05-10t0224520000) | DUPLICATE_AZURE_SERVICE_PRINCIPAL /api/atlas/v2/groups/69ffd8476768cfe24d9762f0/cloudProviderAccess | qa | 2581.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10

### Error 2026-05-10T02:24:52+00:00
```
2026-05-10T02:24:52.0927170Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-10T02:24:52.0938457Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-10T02:24:52.1033513Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-10T02:24:52.1034661Z     resource_stream_connection_test.go:1314: Step 1/2 error: Error running apply: exit status 1
2026-05-10T02:24:52.1035485Z         
2026-05-10T02:24:52.1039922Z         Error: error creating cloud provider access https://cloud-qa.mongodb.com/api/atlas/v2/groups/69ffd8476768cfe24d9762f0/cloudProviderAccess POST: HTTP 409 Conflict (Error code: "DUPLICATE_AZURE_SERVICE_PRINCIPAL") Detail: An Azure Service Principal has already been configured for the specified Azure Service Principal ID (9f613ecc-5d13-4573-b8d8-7e17847891e6). Reason: Conflict. Params: [9f613ecc-5d13-4573-b8d8-7e17847891e6], BadRequestDetail: 
2026-05-10T02:24:52.1043089Z         
2026-05-10T02:24:52.1043884Z           with mongodbatlas_cloud_provider_access_setup.azure_setup,
2026-05-10T02:24:52.1045404Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_cloud_provider_access_setup" "azure_setup":
2026-05-10T02:24:52.1046868Z           31: 		resource "mongodbatlas_cloud_provider_access_setup" "azure_setup" {
2026-05-10T02:24:52.1047664Z         
2026-05-10T02:24:52.1048271Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStorage (2581.39s)
```

- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 3 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 29 minutes
- 2026-05-25 PASS 4 minutes
- 2026-05-26 PASS 3 minutes
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 3 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
