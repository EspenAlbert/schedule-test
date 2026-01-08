# autogen_slow/searchindexapi/TestAccSearchIndexAPI_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 01:14](#error-2026-01-07t0114180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da97daf4f6cc389e8f782/clusters/test-acc-tf-c-1226325638735709929 | dev | flaky_500 | 245.02s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 22 minutes
  - PASS 19 minutes
- 2025-12-11 PASS 23 minutes
- 2025-12-12 PASS 19 minutes
- 2025-12-13 PASS 19 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 19 minutes
- 2025-12-16 PASS 18 minutes
- 2025-12-17 PASS 24 minutes
- 2025-12-18 PASS 17 minutes
- 2025-12-19 PASS 24 minutes
- 2025-12-20 PASS 21 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 22 minutes
- 2025-12-23 PASS 27 minutes
- 2025-12-24 PASS 18 minutes
- 2025-12-25 PASS 23 minutes
- 2025-12-26 PASS 25 minutes
- 2025-12-27 PASS 18 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 24 minutes
- 2025-12-31 PASS 23 minutes
- 2026-01-01 PASS 21 minutes
- 2026-01-02 PASS 23 minutes
- 2026-01-03 PASS 21 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 21 minutes
- 2026-01-06 PASS 19 minutes
- 2026-01-07

### Error 2026-01-07T01:14:18+00:00
```
2026-01-07T01:14:18.8351621Z === RUN   TestAccSearchIndexAPI_basic
2026-01-07T01:14:18.8352801Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-1063825288377423907
2026-01-07T01:14:18.8353838Z     resource_test.go:21: Creating execution cluster: test-acc-tf-c-1226325638735709929
2026-01-07T01:14:18.8354662Z 2026/01/07 00:32:01 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T01:14:18.8355062Z 2026/01/07 00:35:01 [TRACE] Waiting 1m0s before next try
2026-01-07T01:14:18.8355587Z     resource_test.go:21: 
2026-01-07T01:14:18.8356562Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T01:14:18.8358339Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T01:14:18.8360168Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:21
2026-01-07T01:14:18.8360947Z         	Error:      	Received unexpected error:
2026-01-07T01:14:18.8364280Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da97daf4f6cc389e8f782/clusters/test-acc-tf-c-1226325638735709929 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T01:14:18.8365724Z         	Test:       	TestAccSearchIndexAPI_basic
2026-01-07T01:14:18.8367729Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1226325638735709929, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da97daf4f6cc389e8f782/clusters/test-acc-tf-c-1226325638735709929 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T01:14:18.8369052Z --- FAIL: TestAccSearchIndexAPI_basic (245.19s)
```

- 2026-01-08 PASS 25 minutes

## QA Environment
### Timeline
- 2025-12-09 PASS 16 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 20 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 19 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 21 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 16 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 minutes
