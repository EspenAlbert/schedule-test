# autogen_slow/searchindexapi/TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers Test Details
# Found 32 TestRuns in dev, qa from 2025-12-09 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 01:14](#error-2026-01-07t0114180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da97daf4f6cc389e8f782/clusters/test-acc-tf-c-6462028058766185460 | dev | flaky_500 | 241.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 15 minutes
  - PASS 15 minutes
- 2025-12-11 PASS 11 minutes
- 2025-12-12 PASS 20 minutes
- 2025-12-13 PASS 11 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 9 minutes
- 2025-12-16 PASS 16 minutes
- 2025-12-17 PASS 18 minutes
- 2025-12-18 PASS 10 minutes
- 2025-12-19 PASS 16 minutes
- 2025-12-20 PASS 14 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 13 minutes
- 2025-12-23 PASS 14 minutes
- 2025-12-24 PASS 19 minutes
- 2025-12-25 PASS 8 minutes
- 2025-12-26 PASS 17 minutes
- 2025-12-27 PASS 14 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 17 minutes
- 2025-12-31 PASS 12 minutes
- 2026-01-01 PASS 17 minutes
- 2026-01-02 PASS 17 minutes
- 2026-01-03 PASS 17 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 16 minutes
- 2026-01-06 PASS 12 minutes
- 2026-01-07

### Error 2026-01-07T01:14:18+00:00
```
2026-01-07T01:14:18.8385220Z === RUN   TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-01-07T01:14:18.8385862Z     resource_test.go:70: Creating execution cluster: test-acc-tf-c-6462028058766185460
2026-01-07T01:14:18.8386353Z 2026/01/07 00:40:04 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T01:14:18.8386743Z 2026/01/07 00:43:05 [TRACE] Waiting 1m0s before next try
2026-01-07T01:14:18.8387112Z     resource_test.go:70: 
2026-01-07T01:14:18.8387987Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T01:14:18.8389689Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T01:14:18.8391946Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:70
2026-01-07T01:14:18.8392746Z         	Error:      	Received unexpected error:
2026-01-07T01:14:18.8395055Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da97daf4f6cc389e8f782/clusters/test-acc-tf-c-6462028058766185460 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T01:14:18.8396620Z         	Test:       	TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers
2026-01-07T01:14:18.8398855Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6462028058766185460, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da97daf4f6cc389e8f782/clusters/test-acc-tf-c-6462028058766185460 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T01:14:18.8400330Z --- FAIL: TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers (241.89s)
```

- 2026-01-08 PASS 16 minutes

## QA Environment
### Timeline
- 2025-12-09 PASS 13 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 16 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 12 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 14 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 12 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 14 minutes
