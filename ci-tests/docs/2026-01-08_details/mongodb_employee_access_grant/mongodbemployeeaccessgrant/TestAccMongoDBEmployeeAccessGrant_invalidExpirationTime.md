# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:36](#error-2026-01-07t0036410000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92ad59b8466ea71d476/clusters/test-acc-tf-c-6972221988765895329 | dev | flaky_500 | 382.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS a moment
  - PASS a moment
- 2025-12-11 PASS a moment
- 2025-12-12 PASS a moment
- 2025-12-13 PASS a moment
- 2025-12-14: MISSING
- 2025-12-15 PASS a moment
- 2025-12-16 PASS a moment
- 2025-12-17 PASS a moment
- 2025-12-18 PASS a moment
- 2025-12-19 PASS a moment
- 2025-12-20 PASS a moment
- 2025-12-21: MISSING
- 2025-12-22 PASS a moment
- 2025-12-23 PASS a moment
- 2025-12-24 PASS a moment
- 2025-12-25 PASS a moment
- 2025-12-26 PASS a moment
- 2025-12-27 PASS a moment
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS a moment
- 2025-12-31 PASS a moment
- 2026-01-01 PASS a moment
- 2026-01-02 PASS a moment
- 2026-01-03 PASS a moment
- 2026-01-04: MISSING
- 2026-01-05 PASS a moment
- 2026-01-06 PASS a moment
- 2026-01-07

### Error 2026-01-07T00:36:41+00:00
```
2026-01-07T00:36:41.2421310Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2026-01-07T00:36:41.2421882Z     resource_test.go:66: Creating execution cluster: test-acc-tf-c-6972221988765895329
2026-01-07T00:36:41.9426486Z 2026/01/07 00:36:41 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T00:39:42.3820324Z 2026/01/07 00:39:42 [TRACE] Waiting 1m0s before next try
2026-01-07T00:40:42.7775836Z 2026/01/07 00:40:42 [TRACE] Waiting 10s before next try
2026-01-07T00:40:53.0388567Z 2026/01/07 00:40:53 [TRACE] Waiting 1m0s before next try
2026-01-07T00:41:53.4747574Z 2026/01/07 00:41:53 [TRACE] Waiting 10s before next try
2026-01-07T00:42:03.7265631Z 2026/01/07 00:42:03 [TRACE] Waiting 1m0s before next try
2026-01-07T00:43:04.1003099Z     resource_test.go:66: 
2026-01-07T00:43:04.1004940Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T00:43:04.1007217Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T00:43:04.1009559Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:66
2026-01-07T00:43:04.1010556Z         	Error:      	Received unexpected error:
2026-01-07T00:43:04.1013853Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92ad59b8466ea71d476/clusters/test-acc-tf-c-6972221988765895329 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:43:04.1015404Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2026-01-07T00:43:04.1017468Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6972221988765895329, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92ad59b8466ea71d476/clusters/test-acc-tf-c-6972221988765895329 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:43:04.1018883Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime (382.86s)
```

- 2026-01-08 PASS a moment

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS a moment
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS a moment
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS a moment
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS a moment
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS a moment
