# search_index/searchindex/TestAccSearchIndex_withVector Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 01:14](#error-2026-01-07t0114280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-8855917937619437619 | dev | flaky_500 | 181.07s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 5 seconds
  - PASS 7 seconds
- 2025-12-11 PASS 6 seconds
- 2025-12-12 PASS 7 seconds
- 2025-12-13 PASS 6 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 8 seconds
- 2025-12-16 PASS 6 seconds
- 2025-12-17 PASS 7 seconds
- 2025-12-18 PASS 5 seconds
- 2025-12-19 PASS 5 seconds
- 2025-12-20 PASS 6 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 8 seconds
- 2025-12-23 PASS 7 seconds
- 2025-12-24 PASS 8 seconds
- 2025-12-25 PASS 6 seconds
- 2025-12-26 PASS 6 seconds
- 2025-12-27 PASS 6 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 6 seconds
- 2025-12-31 PASS 8 seconds
- 2026-01-01 PASS 6 seconds
- 2026-01-02 PASS 6 seconds
- 2026-01-03 PASS 6 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 6 seconds
- 2026-01-06 PASS 7 seconds
- 2026-01-07

### Error 2026-01-07T01:14:28+00:00
```
2026-01-07T01:14:28.6418963Z === RUN   TestAccSearchIndex_withVector
2026-01-07T01:14:28.6419620Z     resource_search_index_test.go:193: Creating execution cluster: test-acc-tf-c-8855917937619437619
2026-01-07T01:14:29.5475447Z 2026/01/07 01:14:29 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T01:17:30.3471839Z     resource_search_index_test.go:193: 
2026-01-07T01:17:30.3473389Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T01:17:30.3475946Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T01:17:30.3478553Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:342
2026-01-07T01:17:30.3481442Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:193
2026-01-07T01:17:30.3482508Z         	Error:      	Received unexpected error:
2026-01-07T01:17:30.3485799Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-8855917937619437619 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T01:17:30.3487453Z         	Test:       	TestAccSearchIndex_withVector
2026-01-07T01:17:30.3490186Z         	Messages:   	Cluster creation failed: test-acc-tf-c-8855917937619437619, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-8855917937619437619 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T01:17:30.3491752Z --- FAIL: TestAccSearchIndex_withVector (181.71s)
```

- 2026-01-08 PASS 6 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 8 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 8 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 8 seconds
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
- 2026-01-08 PASS 8 seconds
