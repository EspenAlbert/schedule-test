# stream/streamprocessor/TestAccStreamProcessor_createErrors Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-28 02:40](#error-2026-05-28t0240170000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 2.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS a second
  - PASS a moment
- 2026-05-08 PASS a second
- 2026-05-09
  - PASS a second
  - PASS a moment
- 2026-05-10: MISSING
- 2026-05-11 PASS a second
- 2026-05-12 PASS a moment
- 2026-05-13 PASS a second
- 2026-05-14 PASS a second
- 2026-05-15 PASS a second
- 2026-05-16 PASS a moment
- 2026-05-17: MISSING
- 2026-05-18 PASS a second
- 2026-05-19 PASS a moment
- 2026-05-20
  - PASS a second
  - PASS a second
- 2026-05-21 PASS a second
- 2026-05-22 PASS a moment
- 2026-05-23 PASS a second
- 2026-05-24: MISSING
- 2026-05-25 PASS a second
- 2026-05-26 PASS a moment
- 2026-05-27 PASS a moment
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5666739Z === RUN   TestAccStreamProcessor_createErrors
2026-05-28T02:40:17.5667604Z     resource_test.go:337: Creating execution project (1): test-acc-tf-p-5006769530761016786
2026-05-28T02:40:17.5668240Z     resource_test.go:337: 
2026-05-28T02:40:17.5669363Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5671453Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5673548Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5675516Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-28T02:40:17.5678192Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:337
2026-05-28T02:40:17.5679611Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T02:40:17.5680140Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5683440Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5685006Z         	Test:       	TestAccStreamProcessor_createErrors
2026-05-28T02:40:17.5687910Z         	Messages:   	Project creation failed: test-acc-tf-p-5006769530761016786, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5689641Z --- FAIL: TestAccStreamProcessor_createErrors (2.05s)
```

- 2026-05-29 PASS a moment
- 2026-05-30 PASS a moment
- 2026-05-31: MISSING
- 2026-06-01 PASS a moment
- 2026-06-02 PASS a moment
- 2026-06-03 PASS a moment
- 2026-06-04 PASS a moment
- 2026-06-05 PASS a moment

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS a second
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a second
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS a second
- 2026-05-25 PASS a second
- 2026-05-26 PASS a second
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS a moment
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
