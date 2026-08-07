# search_index/searchindex/TestAccSearchIndex_withSearchType Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:50](#error-2026-07-09t0050080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.08s
[2026-07-11 00:44](#error-2026-07-11t0044080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:50:08+00:00
```
2026-07-09T00:50:08.1552679Z === RUN   TestAccSearchIndex_withSearchType
2026-07-09T00:50:08.1553318Z     resource_search_index_test.go:22: Creating execution project (1): test-acc-tf-p-3577455083836030609
2026-07-09T00:51:11.9509617Z     resource_search_index_test.go:22: 
2026-07-09T00:51:11.9511952Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:51:11.9517322Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:51:11.9519897Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:51:11.9521984Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T00:51:11.9524028Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:22
2026-07-09T00:51:11.9525340Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T00:51:11.9525881Z         	Error:      	Received unexpected error:
2026-07-09T00:51:11.9528408Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:51:11.9529664Z         	Test:       	TestAccSearchIndex_withSearchType
2026-07-09T00:51:11.9531474Z         	Messages:   	Project creation failed: test-acc-tf-p-3577455083836030609, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:51:11.9532672Z --- FAIL: TestAccSearchIndex_withSearchType (63.80s)
```

- 2026-07-10 PASS 10 seconds
- 2026-07-11

### Error 2026-07-11T00:44:08+00:00
```
2026-07-11T00:44:08.8465951Z === RUN   TestAccSearchIndex_withSearchType
2026-07-11T00:44:08.8466584Z     resource_search_index_test.go:22: Creating execution project (1): test-acc-tf-p-1268882355561837718
2026-07-11T00:45:34.5525491Z     resource_search_index_test.go:22: 
2026-07-11T00:45:34.5528775Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:45:34.5534063Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:45:34.5537885Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:45:34.5541289Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-11T00:45:34.5545082Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:22
2026-07-11T00:45:34.5547405Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:45:34.5548455Z         	Error:      	Received unexpected error:
2026-07-11T00:45:34.5552083Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:34.5554203Z         	Test:       	TestAccSearchIndex_withSearchType
2026-07-11T00:45:34.5560033Z         	Messages:   	Project creation failed: test-acc-tf-p-1268882355561837718, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:34.5564054Z --- FAIL: TestAccSearchIndex_withSearchType (85.71s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 11 seconds
- 2026-07-14 PASS 14 seconds
- 2026-07-15 PASS 14 seconds
- 2026-07-16 PASS 13 seconds
- 2026-07-17 PASS 13 seconds
- 2026-07-18 PASS 14 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 14 seconds
- 2026-07-22 PASS 11 seconds
- 2026-07-23 PASS 13 seconds
- 2026-07-24 PASS 12 seconds
- 2026-07-25 PASS 12 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 13 seconds
- 2026-07-28 PASS 12 seconds
- 2026-07-29 PASS 14 seconds
- 2026-07-30 PASS 12 seconds
- 2026-07-31 PASS 14 seconds
- 2026-08-01 PASS 13 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 12 seconds
- 2026-08-04 PASS 11 seconds
- 2026-08-05 PASS 14 seconds
- 2026-08-06 PASS 10 seconds
- 2026-08-07 PASS 10 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 12 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 14 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 15 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 13 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 10 seconds
  - PASS 15 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 11 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
