# stream/streamconnection/TestAccStreamRSStreamConnection_AWSLambda Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.03s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s
[2026-08-03 01:33](#error-2026-08-03t0133290000) |  | dev | flaky_client | 1165.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6021535Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2026-07-09T01:15:21.6022095Z     resource_stream_connection_test.go:483: Creating execution project (1): test-acc-tf-p-6635780549841107773
2026-07-09T01:15:21.6022566Z     resource_stream_connection_test.go:483: 
2026-07-09T01:15:21.6023314Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6024690Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6026178Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6027582Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6029157Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:483
2026-07-09T01:15:21.6030168Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:15:21.6030600Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6032106Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6032927Z         	Test:       	TestAccStreamRSStreamConnection_AWSLambda
2026-07-09T01:15:21.6034282Z         	Messages:   	Project creation failed: test-acc-tf-p-6635780549841107773, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6035316Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (91.29s)
```

- 2026-07-10 PASS 40 seconds
- 2026-07-11 PASS 43 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 34 seconds
- 2026-07-14 PASS 40 seconds
- 2026-07-15 PASS 42 seconds
- 2026-07-16 PASS 41 seconds
- 2026-07-17 PASS 40 seconds
- 2026-07-18 PASS 42 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3240089Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2026-07-21T00:59:13.3240805Z     resource_stream_connection_test.go:483: Creating execution project (1): test-acc-tf-p-8000796960851821649
2026-07-21T00:59:13.3241428Z     resource_stream_connection_test.go:483: 
2026-07-21T00:59:13.3242642Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3244504Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3246361Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3248208Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3250330Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:483
2026-07-21T00:59:13.3251652Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:59:13.3252476Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3255392Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3256870Z         	Test:       	TestAccStreamRSStreamConnection_AWSLambda
2026-07-21T00:59:13.3259296Z         	Messages:   	Project creation failed: test-acc-tf-p-8000796960851821649, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3260905Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (0.50s)
```

- 2026-07-22 PASS 37 seconds
- 2026-07-23 PASS 39 seconds
- 2026-07-24 PASS 39 seconds
- 2026-07-25 PASS 36 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 41 seconds
- 2026-07-28 PASS 40 seconds
- 2026-07-29 PASS 36 seconds
- 2026-07-30 PASS 35 seconds
- 2026-07-31 PASS 36 seconds
- 2026-08-01 PASS 40 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 19 minutes

### Error 2026-08-03T01:33:29+00:00
```
2026-08-03T01:33:29.9992051Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2026-08-03T01:33:29.9999771Z   
2026-08-03T01:33:30.0000316Z     resource_stream_connection_test.go:487: Step 1/2 error: Error running pre-apply plan: exit status 1
2026-08-03T01:33:30.0000824Z         
2026-08-03T01:33:30.0002732Z         Error: configuring Terraform AWS Provider: validating provider credentials: retrieving caller identity from STS: operation error STS: GetCallerIdentity, exceeded maximum number of attempts, 25, https response error StatusCode: 0, RequestID: , request send failed, Post "https://sts.us-east-1.amazonaws.com/": dial tcp 44.213.78.45:443: i/o timeout
2026-08-03T01:33:30.0004428Z         
2026-08-03T01:33:30.0004911Z           with provider["registry.terraform.io/hashicorp/aws"],
2026-08-03T01:33:30.0005517Z           on terraform_plugin_test.tf line 14, in provider "aws":
2026-08-03T01:33:30.0005955Z           14: provider "aws" {}
2026-08-03T01:33:30.0006235Z         
2026-08-03T01:33:30.0006560Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (1165.41s)
```

  - PASS 38 seconds
  - PASS 37 seconds
- 2026-08-04 PASS 39 seconds
- 2026-08-05 PASS 41 seconds
- 2026-08-06 PASS 41 seconds
- 2026-08-07 PASS 40 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 37 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 38 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 41 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 40 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 36 seconds
  - PASS 35 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 37 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
