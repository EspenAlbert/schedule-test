# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3)
Success rate: 90.32%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-19 01:43](#error-2026-05-19t0143060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.00s
[2026-05-28 02:20](#error-2026-05-28t0220310000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.00s
[2026-05-30 01:46](#error-2026-05-30t0146340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 104.10s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 20 minutes
  - PASS 9 minutes
- 2026-05-08 PASS an hour
- 2026-05-09 PASS 32 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 49 minutes
- 2026-05-12 PASS 43 minutes
- 2026-05-13 PASS 44 minutes
- 2026-05-14 PASS 22 minutes
- 2026-05-15 PASS 52 minutes
- 2026-05-16 PASS 35 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 22 minutes
- 2026-05-19

### Error 2026-05-19T01:43:06+00:00
```
2026-05-19T01:43:06.3024362Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-05-19T01:43:06.3024860Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-6634171708307157126
2026-05-19T01:43:06.3025238Z     resource_test.go:115: 
2026-05-19T01:43:06.3025938Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:43:06.3027279Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:43:06.3028731Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:43:06.3030092Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-19T01:43:06.3031520Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:115
2026-05-19T01:43:06.3032433Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:43:06.3032833Z         	Error:      	Received unexpected error:
2026-05-19T01:43:06.3034447Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:43:06.3035292Z         	Test:       	TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-05-19T01:43:06.3036668Z         	Messages:   	Project creation failed: test-acc-tf-p-6634171708307157126, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:43:06.3037600Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (77.01s)
```

- 2026-05-20 PASS 33 minutes
- 2026-05-21 PASS 21 minutes
- 2026-05-22 PASS 36 minutes
- 2026-05-23 PASS 45 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 37 minutes
- 2026-05-26 PASS 40 minutes
- 2026-05-27 PASS 11 minutes
- 2026-05-28

### Error 2026-05-28T02:20:31+00:00
```
2026-05-28T02:20:31.2515337Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-05-28T02:20:31.2515954Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-5517886766758727873
2026-05-28T02:20:31.2516438Z     resource_test.go:115: 
2026-05-28T02:20:31.2517317Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:20:31.2519043Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:20:31.2520763Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:20:31.2522705Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-28T02:20:31.2524559Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:115
2026-05-28T02:20:31.2525730Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T02:20:31.2526386Z         	Error:      	Received unexpected error:
2026-05-28T02:20:31.2529112Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:20:31.2530511Z         	Test:       	TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-05-28T02:20:31.2533011Z         	Messages:   	Project creation failed: test-acc-tf-p-5517886766758727873, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:20:31.2534533Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (1.03s)
```

- 2026-05-29 PASS 31 minutes
- 2026-05-30

### Error 2026-05-30T01:46:34+00:00
```
2026-05-30T01:46:34.9145374Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-05-30T01:46:34.9146045Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-3182260468323698722
2026-05-30T01:46:34.9146567Z     resource_test.go:115: 
2026-05-30T01:46:34.9147506Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:46:34.9149462Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:46:34.9151521Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:46:34.9153337Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-30T01:46:34.9155247Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:115
2026-05-30T01:46:34.9156484Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:46:34.9157044Z         	Error:      	Received unexpected error:
2026-05-30T01:46:34.9159028Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:46:34.9160131Z         	Test:       	TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-05-30T01:46:34.9162155Z         	Messages:   	Project creation failed: test-acc-tf-p-3182260468323698722, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:46:34.9163416Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (104.96s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 24 minutes
- 2026-06-02 PASS 37 minutes
- 2026-06-03 PASS 29 minutes
- 2026-06-04 PASS 22 minutes
- 2026-06-05 PASS an hour

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 25 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 37 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 31 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 37 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
