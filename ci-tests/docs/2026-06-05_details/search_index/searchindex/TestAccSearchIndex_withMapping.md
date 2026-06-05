# search_index/searchindex/TestAccSearchIndex_withMapping Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL
Success rate: 96.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-21 01:04](#error-2026-05-21t0104560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 15 seconds
- 2026-05-08 PASS 12 seconds
- 2026-05-09 PASS 14 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 13 seconds
- 2026-05-12 PASS 13 seconds
- 2026-05-13 PASS 12 seconds
- 2026-05-14 PASS 15 seconds
- 2026-05-15 PASS 13 seconds
- 2026-05-16 PASS 13 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 12 seconds
- 2026-05-19 PASS 13 seconds
- 2026-05-20 PASS 14 seconds
- 2026-05-21

### Error 2026-05-21T01:04:56+00:00
```
2026-05-21T01:04:56.6020361Z === RUN   TestAccSearchIndex_withMapping
2026-05-21T01:04:56.6020968Z     resource_search_index_test.go:40: Creating execution project (1): test-acc-tf-p-4298105737872099875
2026-05-21T01:05:58.7612669Z     resource_search_index_test.go:40: 
2026-05-21T01:05:58.7614755Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:05:58.7618225Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:05:58.7620510Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:05:58.7622622Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-21T01:05:58.7624913Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:40
2026-05-21T01:05:58.7626481Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-21T01:05:58.7627052Z         	Error:      	Received unexpected error:
2026-05-21T01:05:58.7629312Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:58.7630455Z         	Test:       	TestAccSearchIndex_withMapping
2026-05-21T01:05:58.7632187Z         	Messages:   	Project creation failed: test-acc-tf-p-4298105737872099875, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:58.7633346Z --- FAIL: TestAccSearchIndex_withMapping (62.16s)
```

- 2026-05-22 PASS 12 seconds
- 2026-05-23 PASS 14 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 12 seconds
- 2026-05-26 PASS 13 seconds
- 2026-05-27 PASS 12 seconds
- 2026-05-28 PASS 13 seconds
- 2026-05-29 PASS 13 seconds
- 2026-05-30 PASS 12 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 14 seconds
- 2026-06-02 PASS 12 seconds
- 2026-06-03 PASS 12 seconds
- 2026-06-04 PASS 12 seconds
- 2026-06-05 PASS 12 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 13 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 13 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 13 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 14 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
