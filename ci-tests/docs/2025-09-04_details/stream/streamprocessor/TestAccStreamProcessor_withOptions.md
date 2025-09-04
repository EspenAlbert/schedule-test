# stream/streamprocessor/TestAccStreamProcessor_withOptions Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3)
Success rate: 92.86%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:52](#error-2025-08-24t0052470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d374192cd1cc589cec3/streams/test-acc-tf-s-5032423642792954917/connections/KafkaConnectionDestkzlqu | qa | flaky_500 | 651.03s
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2025-09-01 07:26](#error-2025-09-01t0726310000) |  | dev | timeout | 3600.05s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 12 minutes
- 2025-08-07
  - PASS 16 minutes
  - PASS 9 minutes
- 2025-08-08 PASS 11 minutes
- 2025-08-09 PASS 12 minutes
- 2025-08-10 PASS 17 minutes
- 2025-08-11 PASS 35 minutes
- 2025-08-12
  - PASS 13 minutes
  - PASS 11 minutes
- 2025-08-13 PASS 12 minutes
- 2025-08-14 PASS 12 minutes
- 2025-08-15 PASS 10 minutes
- 2025-08-16 PASS 34 minutes
- 2025-08-17 PASS 21 minutes
- 2025-08-18
  - PASS 11 minutes
  - PASS 8 minutes
- 2025-08-19 PASS 11 minutes
- 2025-08-20
  - PASS 12 minutes
  - PASS 14 minutes
- 2025-08-21 PASS 11 minutes
- 2025-08-22 PASS 10 minutes
- 2025-08-23 PASS 11 minutes
- 2025-08-24

### Error 2025-08-24T00:52:47+00:00
```
2025-08-24T00:52:47.5650889Z === RUN   TestAccStreamProcessor_withOptions
2025-08-24T00:52:47.5651441Z     resource_test.go:102: Creating execution cluster: test-acc-tf-c-5429549142729537976
2025-08-24T00:52:47.5651920Z 2025/08/24 00:30:51 [DEBUG] Waiting for state to become: [IDLE]
2025-08-24T00:52:47.5652309Z 2025/08/24 00:33:51 [TRACE] Waiting 1m0s before next try
2025-08-24T00:52:47.5652679Z 2025/08/24 00:34:51 [TRACE] Waiting 10s before next try
2025-08-24T00:52:47.5653043Z 2025/08/24 00:35:01 [TRACE] Waiting 1m0s before next try
2025-08-24T00:52:47.5653586Z 2025/08/24 00:36:02 [TRACE] Waiting 10s before next try
2025-08-24T00:52:47.5653946Z 2025/08/24 00:36:12 [TRACE] Waiting 1m0s before next try
2025-08-24T00:52:47.5654306Z 2025/08/24 00:37:12 [TRACE] Waiting 10s before next try
2025-08-24T00:52:47.5654661Z 2025/08/24 00:37:23 [TRACE] Waiting 1m0s before next try
2025-08-24T00:52:47.5655021Z 2025/08/24 00:38:23 [TRACE] Waiting 10s before next try
2025-08-24T00:52:47.5655380Z 2025/08/24 00:38:33 [TRACE] Waiting 1m0s before next try
2025-08-24T00:52:47.5655737Z 2025/08/24 00:39:33 [TRACE] Waiting 10s before next try
2025-08-24T00:52:47.5656099Z 2025/08/24 00:39:44 [TRACE] Waiting 1m0s before next try
2025-08-24T00:52:47.5802850Z === CONT  TestAccStreamProcessor_withOptions
2025-08-24T00:52:47.5872194Z === NAME  TestAccStreamProcessor_withOptions
2025-08-24T00:52:47.5872771Z     resource_test.go:109: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-08-24T00:52:47.5873196Z         
2025-08-24T00:52:47.5873615Z         Error: error fetching resource
2025-08-24T00:52:47.5873906Z         
2025-08-24T00:52:47.5874317Z           with mongodbatlas_stream_connection.kafka_dest,
2025-08-24T00:52:47.5875080Z           on terraform_plugin_test.tf line 42, in resource "mongodbatlas_stream_connection" "kafka_dest":
2025-08-24T00:52:47.5875803Z           42:             resource "mongodbatlas_stream_connection" "kafka_dest"{
2025-08-24T00:52:47.5876156Z         
2025-08-24T00:52:47.5877147Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d374192cd1cc589cec3/streams/test-acc-tf-s-5032423642792954917/connections/KafkaConnectionDestkzlqu
2025-08-24T00:52:47.5878249Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:52:47.5878869Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:52:47.5879293Z         BadRequestDetail: 
2025-08-24T00:52:47.5879625Z --- FAIL: TestAccStreamProcessor_withOptions (651.28s)
```

- 2025-08-25 PASS 10 minutes
- 2025-08-26 PASS 24 minutes
- 2025-08-27 PASS 13 minutes
- 2025-08-28 PASS 11 minutes
- 2025-08-29
  - PASS 20 minutes
  - PASS 10 minutes
- 2025-08-30 PASS 10 minutes
- 2025-08-31 PASS 10 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.9181329Z === RUN   TestAccStreamProcessor_withOptions
2025-09-01T00:30:38.9182240Z     resource_test.go:101: Creating execution project: test-acc-tf-p-7850536856246308034
2025-09-01T00:30:38.9182998Z     resource_test.go:101: 
2025-09-01T00:30:38.9184550Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.9187927Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.9191063Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.9194401Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:101
2025-09-01T00:30:38.9195757Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.9231019Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9233375Z         	Test:       	TestAccStreamProcessor_withOptions
2025-09-01T00:30:38.9237936Z         	Messages:   	Project creation failed: test-acc-tf-p-7850536856246308034, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9240496Z --- FAIL: TestAccStreamProcessor_withOptions (0.18s)
```

  - FAIL an hour

### Error 2025-09-01T07:26:31+00:00
```
2025-09-01T07:26:31.9714383Z === RUN   TestAccStreamProcessor_withOptions
2025-09-01T07:26:31.9714894Z     resource_test.go:102: Creating execution cluster: test-acc-tf-c-5488080113292472010
2025-09-01T07:26:31.9715357Z 2025/09/01 05:58:20 [DEBUG] Waiting for state to become: [IDLE]
2025-09-01T07:26:31.9715726Z 2025/09/01 06:01:20 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9716073Z 2025/09/01 06:02:21 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9716405Z 2025/09/01 06:02:31 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9716740Z 2025/09/01 06:03:31 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9717074Z 2025/09/01 06:03:41 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9717401Z 2025/09/01 06:04:41 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9717726Z 2025/09/01 06:04:51 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9718065Z 2025/09/01 06:05:51 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9718388Z 2025/09/01 06:06:01 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9718715Z 2025/09/01 06:07:02 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9719042Z 2025/09/01 06:07:12 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9719370Z 2025/09/01 06:08:12 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9719694Z 2025/09/01 06:08:22 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9720026Z 2025/09/01 06:09:22 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9720359Z 2025/09/01 06:09:32 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9720683Z 2025/09/01 06:10:32 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9721133Z 2025/09/01 06:10:42 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9721585Z 2025/09/01 06:11:43 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9721912Z 2025/09/01 06:11:53 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9722237Z 2025/09/01 06:12:53 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9722561Z 2025/09/01 06:13:03 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9722894Z 2025/09/01 06:14:03 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9723218Z 2025/09/01 06:14:13 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9723540Z 2025/09/01 06:15:13 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9723870Z 2025/09/01 06:15:23 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9724322Z 2025/09/01 06:16:24 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9724660Z 2025/09/01 06:16:34 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9724984Z 2025/09/01 06:17:34 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9725317Z 2025/09/01 06:17:44 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9725642Z 2025/09/01 06:18:44 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9725965Z 2025/09/01 06:18:54 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9726293Z 2025/09/01 06:19:54 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9726618Z 2025/09/01 06:20:04 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9726940Z 2025/09/01 06:21:05 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9727262Z 2025/09/01 06:21:15 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9727589Z 2025/09/01 06:22:15 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9727915Z 2025/09/01 06:22:25 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9728243Z 2025/09/01 06:23:25 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9728574Z 2025/09/01 06:23:35 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9728899Z 2025/09/01 06:24:35 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9729367Z 2025/09/01 06:24:45 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9729700Z 2025/09/01 06:25:46 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9730032Z 2025/09/01 06:25:56 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9730359Z 2025/09/01 06:26:56 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9730679Z 2025/09/01 06:27:06 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9731114Z 2025/09/01 06:28:06 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9731443Z 2025/09/01 06:28:16 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9731766Z 2025/09/01 06:29:16 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9732089Z 2025/09/01 06:29:26 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9732422Z 2025/09/01 06:30:27 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9732744Z 2025/09/01 06:30:37 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9733065Z 2025/09/01 06:31:37 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9733401Z 2025/09/01 06:31:47 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9733724Z 2025/09/01 06:32:47 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9734047Z 2025/09/01 06:32:57 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9734384Z 2025/09/01 06:33:57 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9734712Z 2025/09/01 06:34:07 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9735034Z 2025/09/01 06:35:08 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9735356Z 2025/09/01 06:35:18 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9735684Z 2025/09/01 06:36:18 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9736008Z 2025/09/01 06:36:28 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9736340Z 2025/09/01 06:37:28 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9736663Z 2025/09/01 06:37:38 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9736992Z 2025/09/01 06:38:38 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9737320Z 2025/09/01 06:38:48 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9737643Z 2025/09/01 06:39:49 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9737971Z 2025/09/01 06:39:59 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9738291Z 2025/09/01 06:40:59 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9738615Z 2025/09/01 06:41:09 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9738939Z 2025/09/01 06:42:09 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9739270Z 2025/09/01 06:42:19 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9739590Z 2025/09/01 06:43:19 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9739916Z 2025/09/01 06:43:29 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9740362Z 2025/09/01 06:44:30 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9740700Z 2025/09/01 06:44:40 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9741120Z 2025/09/01 06:45:40 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9741455Z 2025/09/01 06:45:50 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9741788Z 2025/09/01 06:46:50 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9742112Z 2025/09/01 06:47:00 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9742435Z 2025/09/01 06:48:00 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9742764Z 2025/09/01 06:48:10 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9743087Z 2025/09/01 06:49:11 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9743409Z 2025/09/01 06:49:21 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9743732Z 2025/09/01 06:50:21 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9744056Z 2025/09/01 06:50:31 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9744383Z 2025/09/01 06:51:31 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9744705Z 2025/09/01 06:51:41 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9745030Z 2025/09/01 06:52:41 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9745484Z 2025/09/01 06:52:52 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9745809Z 2025/09/01 06:53:52 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9746132Z 2025/09/01 06:54:02 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9746476Z 2025/09/01 06:55:02 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9746821Z 2025/09/01 06:55:12 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9747158Z 2025/09/01 06:56:12 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9747495Z 2025/09/01 06:56:22 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9747827Z 2025/09/01 06:57:22 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9748153Z 2025/09/01 06:57:33 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9748510Z 2025/09/01 06:58:20 [WARN] WaitForState timeout after 1h0m0s
2025-09-01T07:26:31.9748915Z 2025/09/01 06:58:20 [WARN] WaitForState starting 30s refresh grace period
2025-09-01T07:26:31.9749305Z     resource_test.go:102: 
2025-09-01T07:26:31.9750164Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-09-01T07:26:31.9751938Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:130
2025-09-01T07:26:31.9753696Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:102
2025-09-01T07:26:31.9754441Z         	Error:      	Received unexpected error:
2025-09-01T07:26:31.9755326Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T07:26:31.9755885Z         	Test:       	TestAccStreamProcessor_withOptions
2025-09-01T07:26:31.9756882Z         	Messages:   	Cluster creation failed: test-acc-tf-c-5488080113292472010, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T07:26:31.9757583Z --- FAIL: TestAccStreamProcessor_withOptions (3600.50s)
```

  - PASS 10 minutes
  - PASS 11 minutes
  - PASS 10 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 11 minutes
- 2025-09-02 PASS 13 minutes
- 2025-09-03 PASS 21 minutes
- 2025-09-04 PASS 14 minutes