# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_azureCloudProviderConfig Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-16 00:53](#error-2026-07-16t0053510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS a minute
- 2026-07-10 PASS 9 seconds
- 2026-07-11 PASS 20 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 8 seconds
- 2026-07-14 PASS 11 seconds
- 2026-07-15 PASS 17 seconds
- 2026-07-16

### Error 2026-07-16T00:53:51+00:00
```
2026-07-16T00:53:51.1283792Z === RUN   TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-07-16T00:53:51.1285006Z     resource_federated_database_instance_test.go:111: Creating execution project (1): test-acc-tf-p-6573205527503324206
2026-07-16T00:53:51.1287968Z     resource_federated_database_instance_test.go:111: 
2026-07-16T00:53:51.1290018Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:53:51.1294449Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:53:51.1298082Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:53:51.1302342Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/federateddatabaseinstance/resource_federated_database_instance_test.go:111
2026-07-16T00:53:51.1303459Z         	Error:      	Received unexpected error:
2026-07-16T00:53:51.1305437Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:53:51.1306665Z         	Test:       	TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-07-16T00:53:51.1308845Z         	Messages:   	Project creation failed: test-acc-tf-p-6573205527503324206, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:53:51.1310153Z --- FAIL: TestAccFederatedDatabaseInstance_azureCloudProviderConfig (63.33s)
```

- 2026-07-17 PASS 7 seconds
- 2026-07-18 PASS 12 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS a minute
- 2026-07-22 PASS 9 seconds
- 2026-07-23 PASS 15 seconds
- 2026-07-24 PASS 7 seconds
- 2026-07-25 PASS 10 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 9 seconds
- 2026-07-28 PASS 7 seconds
- 2026-07-29 PASS 12 seconds
- 2026-07-30 PASS 9 seconds
- 2026-07-31 PASS 8 seconds
- 2026-08-01 PASS 6 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 7 seconds
- 2026-08-04 PASS 7 seconds
- 2026-08-05 PASS 14 seconds
- 2026-08-06 PASS 7 seconds
- 2026-08-07 PASS 9 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 7 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 14 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 7 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 8 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 8 seconds
  - PASS 9 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 9 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
