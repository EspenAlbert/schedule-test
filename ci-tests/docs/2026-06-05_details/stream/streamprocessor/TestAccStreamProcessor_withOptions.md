# stream/streamprocessor/TestAccStreamProcessor_withOptions Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL(x 5)
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.05s
[2026-05-16 01:46](#error-2026-05-16t0146080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s
[2026-05-28 02:40](#error-2026-05-28t0240170000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.10s
[2026-06-02 01:54](#error-2026-06-02t0154340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 95.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 15 minutes
  - PASS 48 minutes
- 2026-05-08 PASS 13 minutes
- 2026-05-09
  - PASS 12 minutes
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1299958Z === RUN   TestAccStreamProcessor_withOptions
2026-05-09T01:47:38.1300698Z     resource_test.go:171: Creating execution project (1): test-acc-tf-p-892696075844771227
2026-05-09T01:47:38.1301248Z     resource_test.go:171: 
2026-05-09T01:47:38.1302362Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1304179Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1305997Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1307800Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-09T01:47:38.1309700Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:171
2026-05-09T01:47:38.1310910Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:47:38.1311446Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1313765Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1315082Z         	Test:       	TestAccStreamProcessor_withOptions
2026-05-09T01:47:38.1316871Z         	Messages:   	Project creation failed: test-acc-tf-p-892696075844771227, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1318082Z --- FAIL: TestAccStreamProcessor_withOptions (85.52s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 14 minutes
- 2026-05-12 PASS 13 minutes
- 2026-05-13 PASS 12 minutes
- 2026-05-14 PASS 20 minutes
- 2026-05-15 PASS 12 minutes
- 2026-05-16

### Error 2026-05-16T01:46:08+00:00
```
2026-05-16T01:46:08.1037804Z === RUN   TestAccStreamProcessor_withOptions
2026-05-16T01:46:08.1038387Z     resource_test.go:171: Creating execution project (1): test-acc-tf-p-5040495561165768297
2026-05-16T01:46:08.1038886Z     resource_test.go:171: 
2026-05-16T01:46:08.1039810Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:46:08.1041650Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:46:08.1043615Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:46:08.1045449Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-16T01:46:08.1047381Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:171
2026-05-16T01:46:08.1048613Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-16T01:46:08.1060170Z         	Error:      	Received unexpected error:
2026-05-16T01:46:08.1062646Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.1063944Z         	Test:       	TestAccStreamProcessor_withOptions
2026-05-16T01:46:08.1065751Z         	Messages:   	Project creation failed: test-acc-tf-p-5040495561165768297, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.1067516Z --- FAIL: TestAccStreamProcessor_withOptions (64.84s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 18 minutes
- 2026-05-19 PASS 13 minutes
- 2026-05-20
  - PASS 12 minutes
  - PASS 12 minutes
- 2026-05-21 PASS 19 minutes
- 2026-05-22 PASS 13 minutes
- 2026-05-23 PASS 12 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 14 minutes
- 2026-05-26 PASS 13 minutes
- 2026-05-27 PASS 36 minutes
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5320651Z === RUN   TestAccStreamProcessor_withOptions
2026-05-28T02:40:17.5321238Z     resource_test.go:171: Creating execution project (1): test-acc-tf-p-1177024806949376420
2026-05-28T02:40:17.5321739Z     resource_test.go:171: 
2026-05-28T02:40:17.5322652Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5324460Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5326255Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5328296Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-28T02:40:17.5330335Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:171
2026-05-28T02:40:17.5331543Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T02:40:17.5332064Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5335054Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5336633Z         	Test:       	TestAccStreamProcessor_withOptions
2026-05-28T02:40:17.5339581Z         	Messages:   	Project creation failed: test-acc-tf-p-1177024806949376420, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5341312Z --- FAIL: TestAccStreamProcessor_withOptions (0.99s)
```

- 2026-05-29 PASS 12 minutes
- 2026-05-30 PASS 12 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 18 minutes
- 2026-06-02

### Error 2026-06-02T01:54:34+00:00
```
2026-06-02T01:54:34.5671575Z === RUN   TestAccStreamProcessor_withOptions
2026-06-02T01:54:34.5672148Z     resource_test.go:171: Creating execution project (1): test-acc-tf-p-1147825631695274969
2026-06-02T01:54:34.5672658Z     resource_test.go:171: 
2026-06-02T01:54:34.5673513Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:54:34.5675239Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:54:34.5676912Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:54:34.5678565Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-06-02T01:54:34.5680292Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:171
2026-06-02T01:54:34.5681431Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:54:34.5681946Z         	Error:      	Received unexpected error:
2026-06-02T01:54:34.5683699Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5684764Z         	Test:       	TestAccStreamProcessor_withOptions
2026-06-02T01:54:34.5686680Z         	Messages:   	Project creation failed: test-acc-tf-p-1147825631695274969, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5687941Z --- FAIL: TestAccStreamProcessor_withOptions (95.25s)
```

- 2026-06-03 PASS 14 minutes
- 2026-06-04 PASS 30 minutes
- 2026-06-05 PASS 12 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-31 02:22](#error-2026-05-31t0222320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6a1b89715090848708f7123d/streams/test-acc-tf-s-529063259465365969/processor | qa | 806.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 16 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 15 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 14 minutes
- 2026-05-25 PASS 12 minutes
- 2026-05-26 PASS 12 minutes
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31

### Error 2026-05-31T02:22:32+00:00
```
2026-05-31T02:22:32.6369240Z === RUN   TestAccStreamProcessor_withOptions
2026-05-31T02:22:32.6369846Z     resource_test.go:172: Creating execution cluster: test-acc-tf-c-2522112143074900344
2026-05-31T02:22:32.6398138Z   
2026-05-31T02:22:32.6398852Z     resource_test.go:179: Step 1/2 error: Error running apply: exit status 1
2026-05-31T02:22:32.6399734Z         
2026-05-31T02:22:32.6400263Z         Error: error creating resource
2026-05-31T02:22:32.6400774Z         
2026-05-31T02:22:32.6401448Z           with mongodbatlas_stream_processor.processor,
2026-05-31T02:22:32.6402802Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-05-31T02:22:32.6404083Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2026-05-31T02:22:32.6405015Z         
2026-05-31T02:22:32.6406413Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a1b89715090848708f7123d/streams/test-acc-tf-s-529063259465365969/processor
2026-05-31T02:22:32.6407974Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-05-31T02:22:32.6409477Z         Detail: Streams Processor with this name (new-processorb8fya) had a problem
2026-05-31T02:22:32.6410753Z         occur: connection named ClusterConnectionSrcb8fya does not exist. Check
2026-05-31T02:22:32.6412033Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-05-31T02:22:32.6412879Z         [new-processorb8fya connection named ClusterConnectionSrcb8fya does not
2026-05-31T02:22:32.6413561Z         exist. Check sp.listConnections() for available connections],
2026-05-31T02:22:32.6414031Z         BadRequestDetail: 
2026-05-31T02:22:32.6414476Z --- FAIL: TestAccStreamProcessor_withOptions (806.23s)
```

- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
