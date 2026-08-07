# stream/streamconnection/TestAccStreamStreamConnection_https Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.00s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.08s
[2026-08-03 01:33](#error-2026-08-03t0133290000) |  | dev | flaky_client | 5.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6004749Z === RUN   TestAccStreamStreamConnection_https
2026-07-09T01:15:21.6005285Z     resource_stream_connection_test.go:388: Creating execution project (1): test-acc-tf-p-260993834269845803
2026-07-09T01:15:21.6005857Z     resource_stream_connection_test.go:388: 
2026-07-09T01:15:21.6006615Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6009104Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6010518Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6011898Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6013472Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:388
2026-07-09T01:15:21.6014461Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:15:21.6014894Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6016903Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6017782Z         	Test:       	TestAccStreamStreamConnection_https
2026-07-09T01:15:21.6019138Z         	Messages:   	Project creation failed: test-acc-tf-p-260993834269845803, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6020039Z --- FAIL: TestAccStreamStreamConnection_https (63.04s)
```

- 2026-07-10 PASS 7 seconds
- 2026-07-11 PASS a minute
- 2026-07-12: MISSING
- 2026-07-13 PASS 8 seconds
- 2026-07-14 PASS 10 seconds
- 2026-07-15 PASS 6 seconds
- 2026-07-16 PASS 13 seconds
- 2026-07-17 PASS 9 seconds
- 2026-07-18 PASS 12 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3217189Z === RUN   TestAccStreamStreamConnection_https
2026-07-21T00:59:13.3217890Z     resource_stream_connection_test.go:388: Creating execution project (1): test-acc-tf-p-3832664197641215228
2026-07-21T00:59:13.3218514Z     resource_stream_connection_test.go:388: 
2026-07-21T00:59:13.3219496Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3221344Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3223417Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3225426Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3227565Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:388
2026-07-21T00:59:13.3229006Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:59:13.3229563Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3232688Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3234194Z         	Test:       	TestAccStreamStreamConnection_https
2026-07-21T00:59:13.3236629Z         	Messages:   	Project creation failed: test-acc-tf-p-3832664197641215228, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3238240Z --- FAIL: TestAccStreamStreamConnection_https (0.84s)
```

- 2026-07-22 PASS 7 seconds
- 2026-07-23 PASS 7 seconds
- 2026-07-24 PASS 7 seconds
- 2026-07-25 PASS 7 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 7 seconds
- 2026-07-28 PASS 6 seconds
- 2026-07-29 PASS 4 seconds
- 2026-07-30 PASS 4 seconds
- 2026-07-31 PASS 4 seconds
- 2026-08-01 PASS 6 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:29+00:00
```
2026-08-03T01:33:29.9972938Z === RUN   TestAccStreamStreamConnection_https
2026-08-03T01:33:29.9984264Z   
2026-08-03T01:33:29.9984824Z     resource_stream_connection_test.go:400: Step 1/4 error: Error running apply: exit status 1
2026-08-03T01:33:29.9985310Z         
2026-08-03T01:33:29.9985611Z         Error: error creating resource
2026-08-03T01:33:29.9985911Z         
2026-08-03T01:33:29.9986284Z           with mongodbatlas_stream_connection.test,
2026-08-03T01:33:29.9987015Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-08-03T01:33:29.9987695Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-08-03T01:33:29.9988057Z         
2026-08-03T01:33:29.9988286Z         Post
2026-08-03T01:33:29.9989116Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe500aa9e3c145b665a3d/streams/test-acc-tf-s-8498845148385410232/connections":
2026-08-03T01:33:29.9989857Z         dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:29.9990248Z --- FAIL: TestAccStreamStreamConnection_https (5.30s)
```

  - PASS 6 seconds
  - PASS 5 seconds
- 2026-08-04 PASS 7 seconds
- 2026-08-05 PASS 10 seconds
- 2026-08-06 PASS 7 seconds
- 2026-08-07 PASS 9 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 11 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 7 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 11 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 10 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 4 seconds
  - PASS 5 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 5 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
