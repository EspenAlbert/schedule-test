# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withVector Test Details
# Found 32 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 01:14](#error-2026-01-07t0114180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da97daf4f6cc389e8f782/clusters/test-acc-tf-c-8001162813870106399 | dev | flaky_500 | 241.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 6 minutes
  - PASS 7 minutes
- 2025-12-11 PASS 7 minutes
- 2025-12-12 PASS 11 minutes
- 2025-12-13 PASS 9 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS a minute
- 2025-12-16 PASS 9 minutes
- 2025-12-17 PASS a minute
- 2025-12-18 PASS 7 minutes
- 2025-12-19 PASS 10 minutes
- 2025-12-20 PASS 11 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS a minute
- 2025-12-23 PASS 6 minutes
- 2025-12-24 PASS a minute
- 2025-12-25 PASS 5 minutes
- 2025-12-26 PASS a minute
- 2025-12-27 PASS 5 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 4 minutes
- 2025-12-31 PASS 2 minutes
- 2026-01-01 PASS 8 minutes
- 2026-01-02 PASS 6 minutes
- 2026-01-03 PASS 12 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS a minute
- 2026-01-06 PASS a minute
- 2026-01-07

### Error 2026-01-07T01:14:18+00:00
```
2026-01-07T01:14:18.8436720Z === RUN   TestAccSearchIndexAPI_withVector
2026-01-07T01:14:18.8437248Z     resource_test.go:140: Creating execution cluster: test-acc-tf-c-8001162813870106399
2026-01-07T01:14:18.8437734Z 2026/01/07 01:00:35 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T01:14:18.8438125Z 2026/01/07 01:03:36 [TRACE] Waiting 1m0s before next try
2026-01-07T01:14:18.8438490Z     resource_test.go:140: 
2026-01-07T01:14:18.8439372Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T01:14:18.8441078Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T01:14:18.8443214Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:140
2026-01-07T01:14:18.8443977Z         	Error:      	Received unexpected error:
2026-01-07T01:14:18.8446293Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da97daf4f6cc389e8f782/clusters/test-acc-tf-c-8001162813870106399 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T01:14:18.8447490Z         	Test:       	TestAccSearchIndexAPI_withVector
2026-01-07T01:14:18.8449495Z         	Messages:   	Cluster creation failed: test-acc-tf-c-8001162813870106399, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da97daf4f6cc389e8f782/clusters/test-acc-tf-c-8001162813870106399 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T01:14:18.8450836Z --- FAIL: TestAccSearchIndexAPI_withVector (241.93s)
```

- 2026-01-08 PASS 5 minutes

## QA Environment
### Timeline
- 2025-12-09 PASS 8 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS a minute
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS a minute
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 7 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 9 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 10 minutes
