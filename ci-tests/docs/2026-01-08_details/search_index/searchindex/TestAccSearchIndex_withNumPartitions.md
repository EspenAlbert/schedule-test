# search_index/searchindex/TestAccSearchIndex_withNumPartitions Test Details
# Found 3 TestRuns in dev, qa from 2026-01-07 to 2026-01-08 from master branch: 1 unique tests, PASS(x 2) FAIL
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 01:17](#error-2026-01-07t0117300000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-7933545120770497201 | dev | flaky_500 | 252.00s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T01:17:30+00:00
```
2026-01-07T01:17:30.3492099Z === RUN   TestAccSearchIndex_withNumPartitions
2026-01-07T01:17:30.3492683Z     resource_search_index_test.go:198: Creating execution cluster: test-acc-tf-c-7933545120770497201
2026-01-07T01:17:31.1646804Z 2026/01/07 01:17:31 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T01:20:31.7334871Z 2026/01/07 01:20:31 [TRACE] Waiting 1m0s before next try
2026-01-07T01:21:32.1841997Z 2026/01/07 01:21:32 [TRACE] Waiting 10s before next try
2026-01-07T01:21:42.4011492Z     resource_search_index_test.go:198: 
2026-01-07T01:21:42.4013285Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T01:21:42.4015947Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T01:21:42.4018818Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:198
2026-01-07T01:21:42.4019897Z         	Error:      	Received unexpected error:
2026-01-07T01:21:42.4023347Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-7933545120770497201 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T01:21:42.4025628Z         	Test:       	TestAccSearchIndex_withNumPartitions
2026-01-07T01:21:42.4028605Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7933545120770497201, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-7933545120770497201 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T01:21:42.4030009Z --- FAIL: TestAccSearchIndex_withNumPartitions (252.05s)
```

- 2026-01-08 PASS 13 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 13 minutes
