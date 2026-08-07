# search_index/searchindex/TestAccSearchIndex_withSynonyms Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:53](#error-2026-07-09t0053080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.00s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:53:08+00:00
```
2026-07-09T00:53:08.9668956Z === RUN   TestAccSearchIndex_withSynonyms
2026-07-09T00:53:08.9669581Z     resource_search_index_test.go:58: Creating execution project (1): test-acc-tf-p-8335948110802409396
2026-07-09T00:54:37.9836588Z     resource_search_index_test.go:58: 
2026-07-09T00:54:37.9838512Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:54:37.9840562Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:54:37.9842406Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:54:37.9844697Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T00:54:37.9846956Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:58
2026-07-09T00:54:37.9848205Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T00:54:37.9848736Z         	Error:      	Received unexpected error:
2026-07-09T00:54:37.9850687Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:54:37.9851746Z         	Test:       	TestAccSearchIndex_withSynonyms
2026-07-09T00:54:37.9853512Z         	Messages:   	Project creation failed: test-acc-tf-p-8335948110802409396, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:54:37.9855257Z --- FAIL: TestAccSearchIndex_withSynonyms (89.02s)
```

- 2026-07-10 PASS 14 seconds
- 2026-07-11 PASS 11 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 14 seconds
- 2026-07-14 PASS 12 seconds
- 2026-07-15 PASS 12 seconds
- 2026-07-16 PASS 13 seconds
- 2026-07-17 PASS 13 seconds
- 2026-07-18 PASS 13 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 13 seconds
- 2026-07-22 PASS 13 seconds
- 2026-07-23 PASS 11 seconds
- 2026-07-24 PASS 11 seconds
- 2026-07-25 PASS 11 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 10 seconds
- 2026-07-28 PASS 12 seconds
- 2026-07-29 PASS 13 seconds
- 2026-07-30 PASS 13 seconds
- 2026-07-31 PASS 14 seconds
- 2026-08-01 PASS 13 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 13 seconds
- 2026-08-04 PASS 12 seconds
- 2026-08-05 PASS 11 seconds
- 2026-08-06 PASS 11 seconds
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
- 2026-07-15 PASS 13 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 12 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 12 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 11 seconds
  - PASS 12 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 12 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
