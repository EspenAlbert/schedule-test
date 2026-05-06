# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_azureCloudProviderConfig Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:46](#error-2026-04-11t0046520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 48 seconds
- 2026-04-08 PASS 13 seconds
- 2026-04-09 PASS 15 seconds
- 2026-04-10 PASS 9 seconds
- 2026-04-11

### Error 2026-04-11T00:46:52+00:00
```
2026-04-11T00:46:52.5698966Z === RUN   TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-04-11T00:46:52.5702298Z     resource_federated_database_instance_test.go:109: Creating execution project (1): test-acc-tf-p-4781264950752397140
2026-04-11T00:46:52.5703279Z     resource_federated_database_instance_test.go:109: 
2026-04-11T00:46:52.5705475Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:46:52.5708100Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:46:52.5710700Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:46:52.5713310Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/federateddatabaseinstance/resource_federated_database_instance_test.go:109
2026-04-11T00:46:52.5714801Z         	Error:      	Received unexpected error:
2026-04-11T00:46:52.5716836Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:46:52.5718075Z         	Test:       	TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-04-11T00:46:52.5719985Z         	Messages:   	Project creation failed: test-acc-tf-p-4781264950752397140, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:46:52.5721293Z --- FAIL: TestAccFederatedDatabaseInstance_azureCloudProviderConfig (61.53s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 13 seconds
- 2026-04-14 PASS 10 seconds
- 2026-04-15 PASS 7 seconds
- 2026-04-16 PASS 10 seconds
- 2026-04-17 PASS 10 seconds
- 2026-04-18 PASS 21 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 9 seconds
- 2026-04-21 PASS 23 seconds
- 2026-04-22 PASS 9 seconds
- 2026-04-23 PASS 20 seconds
- 2026-04-24 PASS 10 seconds
- 2026-04-25 PASS 9 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 9 seconds
- 2026-04-28 PASS a minute
- 2026-04-29 PASS 9 seconds
- 2026-04-30 PASS 9 seconds
- 2026-05-01 PASS 8 seconds
- 2026-05-02 PASS 9 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 10 seconds
- 2026-05-05 PASS 16 seconds
- 2026-05-06 PASS 9 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 13 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 8 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 8 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 7 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 8 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 8 seconds
- 2026-05-04 PASS 9 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 7 seconds
