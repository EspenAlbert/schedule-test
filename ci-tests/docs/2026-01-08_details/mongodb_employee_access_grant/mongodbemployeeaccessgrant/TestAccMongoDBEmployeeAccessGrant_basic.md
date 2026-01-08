# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92ad59b8466ea71d476/clusters/test-acc-tf-c-3072952486859606306 | dev | flaky_500 | 181.03s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 9 seconds
  - PASS 5 seconds
- 2025-12-11 PASS 11 minutes
- 2025-12-12 PASS 7 seconds
- 2025-12-13 PASS 10 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 7 seconds
- 2025-12-16 PASS 10 minutes
- 2025-12-17 PASS 10 seconds
- 2025-12-18 PASS 11 minutes
- 2025-12-19 PASS 9 seconds
- 2025-12-20 PASS 12 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 5 seconds
- 2025-12-23 PASS 11 minutes
- 2025-12-24 PASS 6 seconds
- 2025-12-25 PASS 9 minutes
- 2025-12-26 PASS 10 seconds
- 2025-12-27 PASS 10 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 10 minutes
- 2025-12-31 PASS 5 seconds
- 2026-01-01 PASS 9 minutes
- 2026-01-02 PASS 5 seconds
- 2026-01-03 PASS 10 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 5 seconds
- 2026-01-06 PASS 11 minutes
- 2026-01-07

### Error 2026-01-07T00:33:39+00:00
```
2026-01-07T00:33:39.9278869Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2026-01-07T00:33:39.9279406Z     resource_test.go:26: Creating execution cluster: test-acc-tf-c-3072952486859606306
2026-01-07T00:33:40.6506849Z 2026/01/07 00:33:40 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T00:36:41.2403880Z     resource_test.go:26: 
2026-01-07T00:36:41.2405675Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T00:36:41.2407824Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T00:36:41.2410028Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2026-01-07T00:36:41.2412540Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:26
2026-01-07T00:36:41.2413468Z         	Error:      	Received unexpected error:
2026-01-07T00:36:41.2415868Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92ad59b8466ea71d476/clusters/test-acc-tf-c-3072952486859606306 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:36:41.2417114Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_basic
2026-01-07T00:36:41.2419141Z         	Messages:   	Cluster creation failed: test-acc-tf-c-3072952486859606306, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92ad59b8466ea71d476/clusters/test-acc-tf-c-3072952486859606306 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:36:41.2420874Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_basic (181.31s)
```

- 2026-01-08 PASS 11 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 5 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 5 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 6 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 6 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 6 seconds
