# search_index/searchindex/TestAccSearchIndex_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:37](#error-2026-01-07t0037510000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-2158531050924661713 | dev | flaky_500 | 181.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 8 seconds
  - PASS 5 seconds
- 2025-12-11 PASS 14 minutes
- 2025-12-12 PASS 7 seconds
- 2025-12-13 PASS 13 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 10 seconds
- 2025-12-16 PASS 13 minutes
- 2025-12-17 PASS 8 seconds
- 2025-12-18 PASS 12 minutes
- 2025-12-19 PASS 8 seconds
- 2025-12-20 PASS 12 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 9 seconds
- 2025-12-23 PASS 13 minutes
- 2025-12-24 PASS 8 seconds
- 2025-12-25 PASS 14 minutes
- 2025-12-26 PASS 9 seconds
- 2025-12-27 PASS 14 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 12 minutes
- 2025-12-31 PASS 8 seconds
- 2026-01-01 PASS 12 minutes
- 2026-01-02 PASS 8 seconds
- 2026-01-03 PASS 12 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 8 seconds
- 2026-01-06 PASS 13 minutes
- 2026-01-07

### Error 2026-01-07T00:37:51+00:00
```
2026-01-07T00:37:51.6102731Z === RUN   TestAccSearchIndex_basic
2026-01-07T00:37:51.6103299Z     resource_search_index_test.go:17: Creating execution cluster: test-acc-tf-c-2158531050924661713
2026-01-07T00:37:52.2632945Z 2026/01/07 00:37:52 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T00:40:53.0339734Z     resource_search_index_test.go:17: 
2026-01-07T00:40:53.0341511Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T00:40:53.0344443Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T00:40:53.0347077Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:250
2026-01-07T00:40:53.0349573Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:17
2026-01-07T00:40:53.0350451Z         	Error:      	Received unexpected error:
2026-01-07T00:40:53.0353064Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-2158531050924661713 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:40:53.0354270Z         	Test:       	TestAccSearchIndex_basic
2026-01-07T00:40:53.0356299Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2158531050924661713, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-2158531050924661713 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:40:53.0357641Z --- FAIL: TestAccSearchIndex_basic (181.43s)
```

- 2026-01-08 PASS 13 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 9 seconds
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
- 2026-01-04 PASS 8 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 7 seconds
