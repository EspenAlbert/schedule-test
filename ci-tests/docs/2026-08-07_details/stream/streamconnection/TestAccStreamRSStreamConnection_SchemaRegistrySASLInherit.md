# stream/streamconnection/TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.08s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s
[2026-08-03 01:33](#error-2026-08-03t0133300000) |  | dev | flaky_client | 5.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6100716Z === RUN   TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit
2026-07-09T01:15:21.6101303Z     resource_stream_connection_test.go:682: Creating execution project (1): test-acc-tf-p-5822365826078579401
2026-07-09T01:15:21.6101785Z     resource_stream_connection_test.go:682: 
2026-07-09T01:15:21.6102526Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6103883Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6105233Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6106681Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6108245Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:682
2026-07-09T01:15:21.6109226Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:15:21.6109657Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6111768Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6112912Z         	Test:       	TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit
2026-07-09T01:15:21.6114713Z         	Messages:   	Project creation failed: test-acc-tf-p-5822365826078579401, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6116164Z --- FAIL: TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit (0.76s)
```

- 2026-07-10 PASS 3 seconds
- 2026-07-11 PASS 5 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 3 seconds
- 2026-07-14 PASS 4 seconds
- 2026-07-15 PASS 3 seconds
- 2026-07-16 PASS 5 seconds
- 2026-07-17 PASS 4 seconds
- 2026-07-18 PASS 5 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3352611Z === RUN   TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit
2026-07-21T00:59:13.3353404Z     resource_stream_connection_test.go:682: Creating execution project (1): test-acc-tf-p-7983636334722414589
2026-07-21T00:59:13.3354176Z     resource_stream_connection_test.go:682: 
2026-07-21T00:59:13.3355314Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3357551Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3359628Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3361795Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3364363Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:682
2026-07-21T00:59:13.3365987Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:59:13.3366716Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3370071Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3371929Z         	Test:       	TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit
2026-07-21T00:59:13.3374872Z         	Messages:   	Project creation failed: test-acc-tf-p-7983636334722414589, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3376863Z --- FAIL: TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit (0.94s)
```

- 2026-07-22 PASS 2 seconds
- 2026-07-23 PASS 3 seconds
- 2026-07-24 PASS 3 seconds
- 2026-07-25 PASS 2 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 3 seconds
- 2026-07-28 PASS 2 seconds
- 2026-07-29 PASS 2 seconds
- 2026-07-30 PASS a second
- 2026-07-31 PASS 2 seconds
- 2026-08-01 PASS 3 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:30+00:00
```
2026-08-03T01:33:30.0070748Z === RUN   TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit
2026-08-03T01:33:30.0082287Z   
2026-08-03T01:33:30.0082912Z     resource_stream_connection_test.go:686: Step 1/2 error: Error running apply: exit status 1
2026-08-03T01:33:30.0083400Z         
2026-08-03T01:33:30.0083705Z         Error: error creating resource
2026-08-03T01:33:30.0084014Z         
2026-08-03T01:33:30.0084595Z           with mongodbatlas_stream_connection.test,
2026-08-03T01:33:30.0085326Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_stream_connection" "test":
2026-08-03T01:33:30.0086010Z           19: 		resource "mongodbatlas_stream_connection" "test" {
2026-08-03T01:33:30.0086378Z         
2026-08-03T01:33:30.0086621Z         Post
2026-08-03T01:33:30.0087449Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe500aa9e3c145b665a3d/streams/test-acc-tf-s-8498845148385410232/connections":
2026-08-03T01:33:30.0088193Z         dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:30.0088665Z --- FAIL: TestAccStreamRSStreamConnection_SchemaRegistrySASLInherit (5.29s)
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
