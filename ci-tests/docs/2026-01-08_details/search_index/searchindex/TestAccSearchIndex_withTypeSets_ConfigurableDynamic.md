# search_index/searchindex/TestAccSearchIndex_withTypeSets_ConfigurableDynamic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:50](#error-2026-01-07t0050570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-6699215794906516589 | dev | flaky_500 | 322.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-12-11 PASS 10 seconds
- 2025-12-12 PASS 10 seconds
- 2025-12-13 PASS 12 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 13 seconds
- 2025-12-16 PASS 11 seconds
- 2025-12-17 PASS 10 seconds
- 2025-12-18 PASS 11 seconds
- 2025-12-19 PASS 10 seconds
- 2025-12-20 PASS 13 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 13 seconds
- 2025-12-23 PASS 11 seconds
- 2025-12-24 PASS 13 seconds
- 2025-12-25 PASS 11 seconds
- 2025-12-26 PASS 10 seconds
- 2025-12-27 PASS 10 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 11 seconds
- 2025-12-31 PASS 11 seconds
- 2026-01-01 PASS 11 seconds
- 2026-01-02 PASS 10 seconds
- 2026-01-03 PASS 12 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 10 seconds
- 2026-01-06 PASS 12 seconds
- 2026-01-07

### Error 2026-01-07T00:50:57+00:00
```
2026-01-07T00:50:57.2038711Z === RUN   TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-01-07T00:50:57.2039330Z     resource_search_index_test.go:76: Creating execution cluster: test-acc-tf-c-6699215794906516589
2026-01-07T00:50:57.8884073Z 2026/01/07 00:50:57 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T00:53:58.2905416Z 2026/01/07 00:53:58 [TRACE] Waiting 1m0s before next try
2026-01-07T00:54:58.6857747Z 2026/01/07 00:54:58 [TRACE] Waiting 10s before next try
2026-01-07T00:55:08.9192285Z 2026/01/07 00:55:08 [TRACE] Waiting 1m0s before next try
2026-01-07T00:56:09.3477497Z 2026/01/07 00:56:09 [TRACE] Waiting 10s before next try
2026-01-07T00:56:19.5844166Z     resource_search_index_test.go:76: 
2026-01-07T00:56:19.5845589Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T00:56:19.5847621Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T00:56:19.5849819Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:76
2026-01-07T00:56:19.5850742Z         	Error:      	Received unexpected error:
2026-01-07T00:56:19.5853762Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-6699215794906516589 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:56:19.5855269Z         	Test:       	TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-01-07T00:56:19.5857685Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6699215794906516589, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-6699215794906516589 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:56:19.5859325Z --- FAIL: TestAccSearchIndex_withTypeSets_ConfigurableDynamic (322.38s)
```

- 2026-01-08 PASS 9 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 12 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 13 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 13 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 12 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 11 seconds
