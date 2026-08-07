# stream/streamprocessor/TestAccStreamProcessor_clusterType Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.03s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.03s
[2026-08-03 01:33](#error-2026-08-03t0133300000) |  | dev | flaky_client | 5.00s
[2026-08-03 16:20](#error-2026-08-03t1620250000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6a70b035ee944f77ab8557c0/streams/test-acc-tf-s-8402390760679063379/processor | dev | flaky_500 | 11.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6467960Z === RUN   TestAccStreamProcessor_clusterType
2026-07-09T01:15:21.6468415Z     resource_test.go:354: Creating execution project (1): test-acc-tf-p-3802393364633856588
2026-07-09T01:15:21.6468813Z     resource_test.go:354: 
2026-07-09T01:15:21.6469526Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6470876Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6472223Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6473703Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6475112Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:354
2026-07-09T01:15:21.6476196Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:15:21.6476636Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6478762Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6479816Z         	Test:       	TestAccStreamProcessor_clusterType
2026-07-09T01:15:21.6481727Z         	Messages:   	Project creation failed: test-acc-tf-p-3802393364633856588, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6482892Z --- FAIL: TestAccStreamProcessor_clusterType (1.35s)
```

- 2026-07-10 PASS 9 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7823977Z === RUN   TestAccStreamProcessor_clusterType
2026-07-11T01:30:51.7824596Z     resource_test.go:354: Creating execution project (1): test-acc-tf-p-7549738033482886548
2026-07-11T01:30:51.7825116Z     resource_test.go:354: 
2026-07-11T01:30:51.7826052Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7827875Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7829878Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7831717Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-11T01:30:51.7833641Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:354
2026-07-11T01:30:51.7834882Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T01:30:51.7835426Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7838263Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T01:30:51.7839997Z         	Test:       	TestAccStreamProcessor_clusterType
2026-07-11T01:30:51.7842383Z         	Messages:   	Project creation failed: test-acc-tf-p-7549738033482886548, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T01:30:51.7843958Z --- FAIL: TestAccStreamProcessor_clusterType (0.22s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 9 seconds
- 2026-07-14 PASS 9 seconds
- 2026-07-15 PASS 8 seconds
- 2026-07-16 PASS 10 seconds
- 2026-07-17 PASS 8 seconds
- 2026-07-18 PASS 18 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3854589Z === RUN   TestAccStreamProcessor_clusterType
2026-07-21T00:59:13.3855191Z     resource_test.go:354: Creating execution project (1): test-acc-tf-p-2038823847577657901
2026-07-21T00:59:13.3855700Z     resource_test.go:354: 
2026-07-21T00:59:13.3856642Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3858609Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3860466Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3862439Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3864597Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:354
2026-07-21T00:59:13.3866016Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:59:13.3866716Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3869933Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3871504Z         	Test:       	TestAccStreamProcessor_clusterType
2026-07-21T00:59:13.3874082Z         	Messages:   	Project creation failed: test-acc-tf-p-2038823847577657901, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3875861Z --- FAIL: TestAccStreamProcessor_clusterType (0.36s)
```

- 2026-07-22 PASS 7 seconds
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.6368030Z === RUN   TestAccStreamProcessor_clusterType
2026-07-23T03:35:04.6368636Z     resource_test.go:354: Creating execution project (1): test-acc-tf-p-5227940834111332266
2026-07-23T03:35:04.6369146Z     resource_test.go:354: 
2026-07-23T03:35:04.6370085Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.6371886Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.6373672Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.6375440Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-23T03:35:04.6377306Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:354
2026-07-23T03:35:04.6378876Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T03:35:04.6379431Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.6382230Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6383614Z         	Test:       	TestAccStreamProcessor_clusterType
2026-07-23T03:35:04.6385922Z         	Messages:   	Project creation failed: test-acc-tf-p-5227940834111332266, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6387510Z --- FAIL: TestAccStreamProcessor_clusterType (1.29s)
```

- 2026-07-24 PASS 9 seconds
- 2026-07-25 PASS 8 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 8 seconds
- 2026-07-28 PASS 7 seconds
- 2026-07-29 PASS 6 seconds
- 2026-07-30 PASS 5 seconds
- 2026-07-31 PASS 5 seconds
- 2026-08-01 PASS 7 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:30+00:00
```
2026-08-03T01:33:30.0480930Z === RUN   TestAccStreamProcessor_clusterType
2026-08-03T01:33:30.0481505Z     resource_test.go:355: Creating execution cluster: test-acc-tf-c-5925750816839834471
2026-08-03T01:33:30.0482006Z     resource_test.go:355: 
2026-08-03T01:33:30.0482956Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-08-03T01:33:30.0484936Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-08-03T01:33:30.0486890Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:355
2026-08-03T01:33:30.0487716Z         	Error:      	Received unexpected error:
2026-08-03T01:33:30.0489081Z         	            	Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe501aa9e3c145b667359/clusters": dial tcp 3.228.247.77:443: i/o timeout
2026-08-03T01:33:30.0489889Z         	Test:       	TestAccStreamProcessor_clusterType
2026-08-03T01:33:30.0491382Z         	Messages:   	Cluster creation failed: test-acc-tf-c-5925750816839834471, err: Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe501aa9e3c145b667359/clusters": dial tcp 3.228.247.77:443: i/o timeout
2026-08-03T01:33:30.0492345Z --- FAIL: TestAccStreamProcessor_clusterType (5.00s)
```

  - FAIL 11 seconds

### Error 2026-08-03T16:20:25+00:00
```
2026-08-03T16:20:25.5419926Z === RUN   TestAccStreamProcessor_clusterType
2026-08-03T16:20:25.5435780Z    test_name=TestAccStreamProcessor_clusterType
2026-08-03T16:20:25.5436319Z     resource_test.go:361: Step 1/1 error: Error running apply: exit status 1
2026-08-03T16:20:25.5436747Z         
2026-08-03T16:20:25.5437062Z         Error: error creating resource
2026-08-03T16:20:25.5437372Z         
2026-08-03T16:20:25.5437778Z           with mongodbatlas_stream_processor.processor,
2026-08-03T16:20:25.5438556Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-08-03T16:20:25.5439469Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2026-08-03T16:20:25.5439857Z         
2026-08-03T16:20:25.5440655Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a70b035ee944f77ab8557c0/streams/test-acc-tf-s-8402390760679063379/processor
2026-08-03T16:20:25.5441547Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-08-03T16:20:25.5442264Z         Detail: Streams Processor with this name (new-processorrslyw) had a problem
2026-08-03T16:20:25.5442991Z         occur: error getting cluster info [500/UNEXPECTED_ERROR]: Unexpected error..
2026-08-03T16:20:25.5443705Z         Reason: Bad Request. Params: [new-processorrslyw error getting cluster info
2026-08-03T16:20:25.5444360Z         [500/UNEXPECTED_ERROR]: Unexpected error.], BadRequestDetail: 
2026-08-03T16:20:25.5444833Z --- FAIL: TestAccStreamProcessor_clusterType (11.59s)
```

  - PASS 6 seconds
- 2026-08-04 PASS 8 seconds
- 2026-08-05 PASS 8 seconds
- 2026-08-06 PASS 9 seconds
- 2026-08-07 PASS 8 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 9 seconds
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
- 2026-07-26 PASS 8 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 6 seconds
  - PASS 6 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 6 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
