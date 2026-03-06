# stream/streamconnection/TestAccStreamRSStreamConnection_conflictingFields Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-12 18:47](#error-2026-02-12t1847250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS a moment
- 2026-02-06 PASS a moment
- 2026-02-07
  - PASS a moment
  - PASS a moment
- 2026-02-08: MISSING
- 2026-02-09 PASS a moment
- 2026-02-10 PASS a moment
- 2026-02-11 PASS a moment
- 2026-02-12
  - PASS a moment
  - FAIL a moment

### Error 2026-02-12T18:47:25+00:00
```
2026-02-12T18:47:25.6685489Z === RUN   TestAccStreamRSStreamConnection_conflictingFields
2026-02-12T18:47:25.6686600Z     resource_stream_connection_test.go:536: Creating execution project (1): test-acc-tf-p-5257268141163663634
2026-02-12T18:47:25.6687700Z     resource_stream_connection_test.go:536: 
2026-02-12T18:47:25.6689214Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:25.6692120Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:25.6695055Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:25.6698138Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:25.6701497Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:536
2026-02-12T18:47:25.6703576Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-12T18:47:25.6704382Z         	Error:      	Received unexpected error:
2026-02-12T18:47:25.6709066Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6711425Z         	Test:       	TestAccStreamRSStreamConnection_conflictingFields
2026-02-12T18:47:25.6715271Z         	Messages:   	Project creation failed: test-acc-tf-p-5257268141163663634, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6718243Z --- FAIL: TestAccStreamRSStreamConnection_conflictingFields (0.22s)
```

- 2026-02-13 PASS a moment
- 2026-02-14 PASS a moment
- 2026-02-15: MISSING
- 2026-02-16 PASS a moment
- 2026-02-17 PASS a moment
- 2026-02-18 PASS a moment
- 2026-02-19 PASS a moment
- 2026-02-20 PASS a moment
- 2026-02-21 PASS a moment
- 2026-02-22: MISSING
- 2026-02-23 PASS a moment
- 2026-02-24 PASS a moment
- 2026-02-25
  - PASS a moment
  - PASS a moment
- 2026-02-26 PASS a moment
- 2026-02-27
  - PASS a moment
  - PASS a moment
- 2026-02-28 PASS a moment
- 2026-03-01: MISSING
- 2026-03-02 PASS a moment
- 2026-03-03 PASS a moment
- 2026-03-04 PASS a moment
- 2026-03-05 PASS a moment
- 2026-03-06 PASS a moment

## QA Environment
### Timeline
- 2026-02-04 PASS a moment
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS a moment
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS a moment
- 2026-02-16: MISSING
- 2026-02-17 PASS a moment
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS a moment
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS a moment
- 2026-03-02: MISSING
- 2026-03-03 PASS a moment
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
