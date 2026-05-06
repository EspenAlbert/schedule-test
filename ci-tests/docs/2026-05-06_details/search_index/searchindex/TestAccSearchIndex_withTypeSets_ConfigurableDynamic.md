# search_index/searchindex/TestAccSearchIndex_withTypeSets_ConfigurableDynamic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:50](#error-2026-04-16t0050410000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0325a1ec945fedc71a07e/clusters | dev | out_of_capacity | 0.10s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 12 seconds
- 2026-04-08 PASS 12 seconds
- 2026-04-09 PASS 11 seconds
- 2026-04-10 PASS 10 seconds
- 2026-04-11 PASS 12 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 13 seconds
- 2026-04-14 PASS 11 seconds
- 2026-04-15 PASS 14 seconds
- 2026-04-16

### Error 2026-04-16T00:50:41+00:00
```
2026-04-16T00:50:41.1874073Z === RUN   TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-04-16T00:50:41.1874796Z     resource_search_index_test.go:76: Creating execution cluster: test-acc-tf-c-2937940827460855751
2026-04-16T00:50:42.1436349Z     resource_search_index_test.go:76: 
2026-04-16T00:50:42.1438545Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-04-16T00:50:42.1440616Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-04-16T00:50:42.1442507Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:76
2026-04-16T00:50:42.1443437Z         	Error:      	Received unexpected error:
2026-04-16T00:50:42.1445983Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0325a1ec945fedc71a07e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:42.1447679Z         	Test:       	TestAccSearchIndex_withTypeSets_ConfigurableDynamic
2026-04-16T00:50:42.1449749Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2937940827460855751, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0325a1ec945fedc71a07e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:42.1451273Z --- FAIL: TestAccSearchIndex_withTypeSets_ConfigurableDynamic (0.96s)
```

- 2026-04-17 PASS 13 seconds
- 2026-04-18 PASS 13 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 11 seconds
- 2026-04-21 PASS 13 seconds
- 2026-04-22 PASS 12 seconds
- 2026-04-23 PASS 11 seconds
- 2026-04-24 PASS 12 seconds
- 2026-04-25 PASS 17 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 17 seconds
- 2026-04-28 PASS 17 seconds
- 2026-04-29 PASS 17 seconds
- 2026-04-30 PASS 18 seconds
- 2026-05-01 PASS 18 seconds
- 2026-05-02 PASS 19 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 17 seconds
- 2026-05-05 PASS 17 seconds
- 2026-05-06 PASS 17 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 10 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 12 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 10 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 13 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 17 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 17 seconds
- 2026-05-04 PASS 18 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 16 seconds
