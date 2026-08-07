# stream/streamconnection/TestAccStreamRSStreamConnection_SchemaRegistry Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.03s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s
[2026-08-03 01:33](#error-2026-08-03t0133300000) |  | dev | flaky_client | 5.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6084501Z === RUN   TestAccStreamRSStreamConnection_SchemaRegistry
2026-07-09T01:15:21.6085055Z     resource_stream_connection_test.go:613: Creating execution project (1): test-acc-tf-p-3129182900707716309
2026-07-09T01:15:21.6085643Z     resource_stream_connection_test.go:613: 
2026-07-09T01:15:21.6086593Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6087966Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6089458Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6090811Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6092365Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:613
2026-07-09T01:15:21.6093345Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:15:21.6093768Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6096057Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6097323Z         	Test:       	TestAccStreamRSStreamConnection_SchemaRegistry
2026-07-09T01:15:21.6099120Z         	Messages:   	Project creation failed: test-acc-tf-p-3129182900707716309, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6100312Z --- FAIL: TestAccStreamRSStreamConnection_SchemaRegistry (1.28s)
```

- 2026-07-10 PASS 3 seconds
- 2026-07-11 PASS 5 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 3 seconds
- 2026-07-14 PASS 4 seconds
- 2026-07-15 PASS 3 seconds
- 2026-07-16 PASS 5 seconds
- 2026-07-17 PASS 3 seconds
- 2026-07-18 PASS 5 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3327296Z === RUN   TestAccStreamRSStreamConnection_SchemaRegistry
2026-07-21T00:59:13.3328152Z     resource_stream_connection_test.go:613: Creating execution project (1): test-acc-tf-p-979511260512548660
2026-07-21T00:59:13.3328903Z     resource_stream_connection_test.go:613: 
2026-07-21T00:59:13.3330017Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3332038Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3334439Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3336618Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3339299Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:613
2026-07-21T00:59:13.3340919Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:59:13.3341470Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3344947Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3346771Z         	Test:       	TestAccStreamRSStreamConnection_SchemaRegistry
2026-07-21T00:59:13.3349937Z         	Messages:   	Project creation failed: test-acc-tf-p-979511260512548660, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3351862Z --- FAIL: TestAccStreamRSStreamConnection_SchemaRegistry (0.69s)
```

- 2026-07-22 PASS 3 seconds
- 2026-07-23 PASS 3 seconds
- 2026-07-24 PASS 3 seconds
- 2026-07-25 PASS 2 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 3 seconds
- 2026-07-28 PASS 2 seconds
- 2026-07-29 PASS 2 seconds
- 2026-07-30 PASS a second
- 2026-07-31 PASS 2 seconds
- 2026-08-01 PASS 4 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:30+00:00
```
2026-08-03T01:33:30.0052615Z === RUN   TestAccStreamRSStreamConnection_SchemaRegistry
2026-08-03T01:33:30.0064049Z   
2026-08-03T01:33:30.0064764Z     resource_stream_connection_test.go:619: Step 1/2 error: Error running apply: exit status 1
2026-08-03T01:33:30.0065245Z         
2026-08-03T01:33:30.0065548Z         Error: error creating resource
2026-08-03T01:33:30.0065852Z         
2026-08-03T01:33:30.0066226Z           with mongodbatlas_stream_connection.test,
2026-08-03T01:33:30.0066956Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_stream_connection" "test":
2026-08-03T01:33:30.0067650Z           19: 		resource "mongodbatlas_stream_connection" "test" {
2026-08-03T01:33:30.0068003Z         
2026-08-03T01:33:30.0068238Z         Post
2026-08-03T01:33:30.0069073Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe500aa9e3c145b665a3d/streams/test-acc-tf-s-8498845148385410232/connections":
2026-08-03T01:33:30.0069815Z         dial tcp 23.23.86.210:443: i/o timeout
2026-08-03T01:33:30.0070237Z --- FAIL: TestAccStreamRSStreamConnection_SchemaRegistry (5.29s)
```

  - PASS 2 seconds
  - PASS 2 seconds
- 2026-08-04 PASS 3 seconds
- 2026-08-05 PASS 4 seconds
- 2026-08-06 PASS 3 seconds
- 2026-08-07 PASS 4 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 3 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 3 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 5 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 4 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 2 seconds
  - PASS 2 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 2 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
