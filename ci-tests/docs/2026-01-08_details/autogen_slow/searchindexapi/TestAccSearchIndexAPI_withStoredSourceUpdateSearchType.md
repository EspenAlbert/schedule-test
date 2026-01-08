# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceUpdateSearchType Test Details
# Found 32 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 01:14](#error-2026-01-07t0114180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da97daf4f6cc389e8f782/clusters/test-acc-tf-c-8694215906586651035 | dev | flaky_500 | 181.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 6 minutes
  - PASS 4 minutes
- 2025-12-11 PASS 11 minutes
- 2025-12-12 PASS 7 minutes
- 2025-12-13 PASS 9 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS a minute
- 2025-12-16 PASS 9 minutes
- 2025-12-17 PASS 7 minutes
- 2025-12-18 PASS 7 minutes
- 2025-12-19 PASS 13 minutes
- 2025-12-20 PASS 11 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 11 minutes
- 2025-12-23 PASS 6 minutes
- 2025-12-24 PASS 10 minutes
- 2025-12-25 PASS 8 minutes
- 2025-12-26 PASS 9 minutes
- 2025-12-27 PASS 7 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 4 minutes
- 2025-12-31 PASS 3 minutes
- 2026-01-01 PASS 7 minutes
- 2026-01-02 PASS 9 minutes
- 2026-01-03 PASS 12 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 15 minutes
- 2026-01-06 PASS 10 minutes
- 2026-01-07

### Error 2026-01-07T01:14:18+00:00
```
2026-01-07T01:14:18.8480757Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-01-07T01:14:18.8481639Z     resource_test.go:198: Creating execution cluster: test-acc-tf-c-8694215906586651035
2026-01-07T01:14:18.8482130Z 2026/01/07 01:10:40 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T01:14:18.8482624Z     resource_test.go:198: 
2026-01-07T01:14:18.8483609Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T01:14:18.8485623Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T01:14:18.8487898Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:198
2026-01-07T01:14:18.8488981Z         	Error:      	Received unexpected error:
2026-01-07T01:14:18.8491928Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da97daf4f6cc389e8f782/clusters/test-acc-tf-c-8694215906586651035 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T01:14:18.8493488Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-01-07T01:14:18.8495865Z         	Messages:   	Cluster creation failed: test-acc-tf-c-8694215906586651035, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da97daf4f6cc389e8f782/clusters/test-acc-tf-c-8694215906586651035 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T01:14:18.8497433Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (181.44s)
```

- 2026-01-08 PASS 10 minutes

## QA Environment
### Timeline
- 2025-12-09 PASS 12 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 7 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 10 minutes
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
- 2026-01-04 PASS 11 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 7 minutes
