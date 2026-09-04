# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-13 00:32](#error-2026-08-13t0032350000) |  | dev | flaky_client | 248.01s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 12 minutes
- 2026-08-07 PASS 10 seconds
- 2026-08-08 PASS 13 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 10 seconds
- 2026-08-11 PASS 13 minutes
- 2026-08-12 PASS 11 seconds
- 2026-08-13

### Error 2026-08-13T00:32:35+00:00
```
2026-08-13T00:32:35.2725346Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2026-08-13T00:32:35.2727210Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-7408152185164083245
2026-08-13T00:32:37.3433296Z     resource_test.go:26: Creating execution cluster: test-acc-tf-c-6443605276872069423
2026-08-13T00:32:38.0384937Z 2026/08/13 00:32:38 [DEBUG] Waiting for state to become: [IDLE]
2026-08-13T00:35:38.4181998Z 2026/08/13 00:35:38 [TRACE] Waiting 1m0s before next try
2026-08-13T00:36:43.4227196Z     resource_test.go:26: 
2026-08-13T00:36:43.4231106Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:49
2026-08-13T00:36:43.4235716Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-08-13T00:36:43.4240380Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2026-08-13T00:36:43.4243785Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:26
2026-08-13T00:36:43.4245073Z         	Error:      	Received unexpected error:
2026-08-13T00:36:43.4248508Z         	            	Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a7d10a39b15c37472eb179e/clusters/test-acc-tf-c-6443605276872069423": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-08-13T00:36:43.4250365Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_basic
2026-08-13T00:36:43.4253629Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6443605276872069423, err: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a7d10a39b15c37472eb179e/clusters/test-acc-tf-c-6443605276872069423": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-08-13T00:36:43.4255720Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_basic (248.15s)
```

- 2026-08-14 PASS 11 seconds
- 2026-08-15 PASS 13 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 6 seconds
- 2026-08-18 PASS 14 minutes
- 2026-08-19 PASS 10 seconds
- 2026-08-20 PASS 12 minutes
- 2026-08-21 PASS 6 seconds
- 2026-08-22 PASS 13 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 7 seconds
- 2026-08-25 PASS 12 minutes
- 2026-08-26 PASS 9 seconds
- 2026-08-27 PASS 15 minutes
- 2026-08-28 PASS 11 seconds
- 2026-08-29 PASS 23 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 10 seconds
- 2026-09-01 PASS 13 minutes
- 2026-09-02 PASS 8 seconds
- 2026-09-03 PASS 13 minutes
- 2026-09-04 PASS 6 seconds

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 7 seconds
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 10 seconds
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 8 seconds
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 7 seconds
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 6 seconds
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 6 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
