# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_azureCloudProviderConfig Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-23 01:34](#error-2026-05-23t0134500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.03s
[2026-06-02 01:12](#error-2026-06-02t0112440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS a minute
- 2026-05-08 PASS 7 seconds
- 2026-05-09 PASS 17 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 12 seconds
- 2026-05-12 PASS 9 seconds
- 2026-05-13 PASS 8 seconds
- 2026-05-14 PASS 10 seconds
- 2026-05-15 PASS 10 seconds
- 2026-05-16 PASS 41 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 8 seconds
- 2026-05-19 PASS 9 seconds
- 2026-05-20 PASS 10 seconds
- 2026-05-21 PASS 8 seconds
- 2026-05-22 PASS 9 seconds
- 2026-05-23

### Error 2026-05-23T01:34:50+00:00
```
2026-05-23T01:34:50.0774473Z === RUN   TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-05-23T01:34:50.0775924Z     resource_federated_database_instance_test.go:111: Creating execution project (1): test-acc-tf-p-5116070377155873868
2026-05-23T01:34:50.0777133Z     resource_federated_database_instance_test.go:111: 
2026-05-23T01:34:50.0779006Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:34:50.0782356Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:34:50.0785702Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:34:50.0789617Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/federateddatabaseinstance/resource_federated_database_instance_test.go:111
2026-05-23T01:34:50.0790981Z         	Error:      	Received unexpected error:
2026-05-23T01:34:50.0792921Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:34:50.0794581Z         	Test:       	TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-05-23T01:34:50.0796409Z         	Messages:   	Project creation failed: test-acc-tf-p-5116070377155873868, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:34:50.0798769Z --- FAIL: TestAccFederatedDatabaseInstance_azureCloudProviderConfig (62.32s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 9 seconds
- 2026-05-26 PASS 11 seconds
- 2026-05-27 PASS 10 seconds
- 2026-05-28 PASS a minute
- 2026-05-29 PASS 12 seconds
- 2026-05-30 PASS 12 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 9 seconds
- 2026-06-02

### Error 2026-06-02T01:12:44+00:00
```
2026-06-02T01:12:44.2197324Z === RUN   TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-06-02T01:12:44.2198745Z     resource_federated_database_instance_test.go:111: Creating execution project (1): test-acc-tf-p-3360784942629841036
2026-06-02T01:12:44.2200092Z     resource_federated_database_instance_test.go:111: 
2026-06-02T01:12:44.2201666Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:12:44.2203484Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:12:44.2205259Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:12:44.2207494Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/federateddatabaseinstance/resource_federated_database_instance_test.go:111
2026-06-02T01:12:44.2208757Z         	Error:      	Received unexpected error:
2026-06-02T01:12:44.2210997Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:44.2212184Z         	Test:       	TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-06-02T01:12:44.2214008Z         	Messages:   	Project creation failed: test-acc-tf-p-3360784942629841036, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:44.2215249Z --- FAIL: TestAccFederatedDatabaseInstance_azureCloudProviderConfig (61.58s)
```

- 2026-06-03 PASS 8 seconds
- 2026-06-04 PASS 9 seconds
- 2026-06-05 PASS 9 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 10 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 11 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 10 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 8 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
