# stream/streamconnection/TestMigStreamRSStreamConnection_cluster Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-10 01:15](#error-2025-08-10t0115050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6897e8cd39cf8e2817e3c9dc/streams/test-acc-tf-s-2539241424947313573/connections | qa | flaky_500 | 1106.01s
[2025-08-17 01:18](#error-2025-08-17t0118020000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122d8aafa9a76ca8bc085/streams/test-acc-tf-s-6508215644362021561/connections | qa | flaky_500 | 1337.10s
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s
[2025-09-01 07:26](#error-2025-09-01t0726310000) |  | dev | timeout | 3600.05s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 11 minutes
- 2025-08-07
  - PASS 15 minutes
  - PASS 8 minutes
- 2025-08-08 PASS 11 minutes
- 2025-08-09 PASS 12 minutes
- 2025-08-10

### Error 2025-08-10T01:15:05+00:00
```
2025-08-10T01:15:05.6123136Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-08-10T01:15:05.6124437Z     resource_stream_connection_migration_test.go:17: Creating execution cluster: test-acc-tf-c-3152266614018470864
2025-08-10T01:15:05.6125426Z 2025/08/10 00:33:24 [DEBUG] Waiting for state to become: [IDLE]
2025-08-10T01:15:05.6126080Z 2025/08/10 00:36:24 [TRACE] Waiting 1m0s before next try
2025-08-10T01:15:05.6126686Z 2025/08/10 00:37:25 [TRACE] Waiting 10s before next try
2025-08-10T01:15:05.6127286Z 2025/08/10 00:37:35 [TRACE] Waiting 1m0s before next try
2025-08-10T01:15:05.6127892Z 2025/08/10 00:38:35 [TRACE] Waiting 10s before next try
2025-08-10T01:15:05.6128656Z 2025/08/10 00:38:45 [TRACE] Waiting 1m0s before next try
2025-08-10T01:15:05.6129262Z 2025/08/10 00:39:46 [TRACE] Waiting 10s before next try
2025-08-10T01:15:05.6129863Z 2025/08/10 00:39:56 [TRACE] Waiting 1m0s before next try
2025-08-10T01:15:05.6130460Z 2025/08/10 00:40:56 [TRACE] Waiting 10s before next try
2025-08-10T01:15:05.6131044Z 2025/08/10 00:41:06 [TRACE] Waiting 1m0s before next try
2025-08-10T01:15:05.6131636Z 2025/08/10 00:42:07 [TRACE] Waiting 10s before next try
2025-08-10T01:15:05.6132223Z 2025/08/10 00:42:17 [TRACE] Waiting 1m0s before next try
2025-08-10T01:15:05.6132814Z 2025/08/10 00:43:17 [TRACE] Waiting 10s before next try
2025-08-10T01:15:05.6133406Z 2025/08/10 00:43:27 [TRACE] Waiting 1m0s before next try
2025-08-10T01:15:05.6133996Z 2025/08/10 00:44:28 [TRACE] Waiting 10s before next try
2025-08-10T01:15:05.6134589Z 2025/08/10 00:44:38 [TRACE] Waiting 1m0s before next try
2025-08-10T01:15:05.6135178Z 2025/08/10 00:45:38 [TRACE] Waiting 10s before next try
2025-08-10T01:15:05.6135764Z 2025/08/10 00:45:48 [TRACE] Waiting 1m0s before next try
2025-08-10T01:15:05.6136407Z 2025/08/10 00:46:49 [TRACE] Waiting 10s before next try
2025-08-10T01:15:05.6137013Z 2025/08/10 00:46:59 [TRACE] Waiting 1m0s before next try
2025-08-10T01:15:05.6137603Z 2025/08/10 00:47:59 [TRACE] Waiting 10s before next try
2025-08-10T01:15:05.6138196Z 2025/08/10 00:48:09 [TRACE] Waiting 1m0s before next try
2025-08-10T01:15:05.6138944Z 2025/08/10 00:49:10 [TRACE] Waiting 10s before next try
2025-08-10T01:15:05.6139531Z 2025/08/10 00:49:20 [TRACE] Waiting 1m0s before next try
2025-08-10T01:15:05.6185396Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-08-10T01:15:05.6367794Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-08-10T01:15:05.6368659Z     resource_stream_connection_migration_test.go:17: Step 2/2 error: Error running post-apply non-refresh plan: exit status 1
2025-08-10T01:15:05.6369166Z         
2025-08-10T01:15:05.6369440Z         Error: error fetching results
2025-08-10T01:15:05.6369703Z         
2025-08-10T01:15:05.6370053Z           with data.mongodbatlas_stream_connections.test,
2025-08-10T01:15:05.6370697Z           on terraform_plugin_test.tf line 18, in data "mongodbatlas_stream_connections" "test":
2025-08-10T01:15:05.6371267Z           18: data "mongodbatlas_stream_connections" "test" {
2025-08-10T01:15:05.6371563Z         
2025-08-10T01:15:05.6372324Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e8cd39cf8e2817e3c9dc/streams/test-acc-tf-s-2539241424947313573/connections
2025-08-10T01:15:05.6373177Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-10T01:15:05.6373752Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T01:15:05.6374137Z         BadRequestDetail: 
2025-08-10T01:15:05.6384162Z   
2025-08-10T01:15:05.6414590Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-08-10T01:15:05.6415165Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-10T01:15:05.6415593Z         
2025-08-10T01:15:05.6415864Z         Error: error deleting resource
2025-08-10T01:15:05.6416129Z         
2025-08-10T01:15:05.6416970Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e8cd39cf8e2817e3c9dc/streams/test-acc-tf-s-2539241424947313573/connections/conn-cluster-mig
2025-08-10T01:15:05.6417855Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-08-10T01:15:05.6418561Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T01:15:05.6418970Z         BadRequestDetail: 
2025-08-10T01:15:05.6419298Z --- FAIL: TestMigStreamRSStreamConnection_cluster (1106.12s)
```

- 2025-08-11 PASS 28 minutes
- 2025-08-12
  - PASS 9 minutes
  - PASS 9 minutes
- 2025-08-13 PASS 12 minutes
- 2025-08-14 PASS 11 minutes
- 2025-08-15 PASS 10 minutes
- 2025-08-16 PASS 35 minutes
- 2025-08-17

### Error 2025-08-17T01:18:02+00:00
```
2025-08-17T01:18:02.6207049Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-08-17T01:18:02.6208250Z     resource_stream_connection_migration_test.go:17: Creating execution cluster: test-acc-tf-c-6445022360805095776
2025-08-17T01:18:02.6209571Z 2025/08/17 00:31:25 [DEBUG] Waiting for state to become: [IDLE]
2025-08-17T01:18:02.6210235Z 2025/08/17 00:34:25 [TRACE] Waiting 1m0s before next try
2025-08-17T01:18:02.6210866Z 2025/08/17 00:35:25 [TRACE] Waiting 10s before next try
2025-08-17T01:18:02.6211475Z 2025/08/17 00:35:35 [TRACE] Waiting 1m0s before next try
2025-08-17T01:18:02.6212078Z 2025/08/17 00:36:35 [TRACE] Waiting 10s before next try
2025-08-17T01:18:02.6212674Z 2025/08/17 00:36:46 [TRACE] Waiting 1m0s before next try
2025-08-17T01:18:02.6213284Z 2025/08/17 00:37:46 [TRACE] Waiting 10s before next try
2025-08-17T01:18:02.6213883Z 2025/08/17 00:37:56 [TRACE] Waiting 1m0s before next try
2025-08-17T01:18:02.6214482Z 2025/08/17 00:38:56 [TRACE] Waiting 10s before next try
2025-08-17T01:18:02.6215100Z 2025/08/17 00:39:06 [TRACE] Waiting 1m0s before next try
2025-08-17T01:18:02.6215701Z 2025/08/17 00:40:06 [TRACE] Waiting 10s before next try
2025-08-17T01:18:02.6216299Z 2025/08/17 00:40:16 [TRACE] Waiting 1m0s before next try
2025-08-17T01:18:02.6216898Z 2025/08/17 00:41:17 [TRACE] Waiting 10s before next try
2025-08-17T01:18:02.6217498Z 2025/08/17 00:41:27 [TRACE] Waiting 1m0s before next try
2025-08-17T01:18:02.6218091Z 2025/08/17 00:42:27 [TRACE] Waiting 10s before next try
2025-08-17T01:18:02.6218682Z 2025/08/17 00:42:37 [TRACE] Waiting 1m0s before next try
2025-08-17T01:18:02.6219466Z 2025/08/17 00:43:37 [TRACE] Waiting 10s before next try
2025-08-17T01:18:02.6220076Z 2025/08/17 00:43:47 [TRACE] Waiting 1m0s before next try
2025-08-17T01:18:02.6220680Z 2025/08/17 00:44:48 [TRACE] Waiting 10s before next try
2025-08-17T01:18:02.6221281Z 2025/08/17 00:44:58 [TRACE] Waiting 1m0s before next try
2025-08-17T01:18:02.6221884Z 2025/08/17 00:45:58 [TRACE] Waiting 10s before next try
2025-08-17T01:18:02.6222487Z 2025/08/17 00:46:08 [TRACE] Waiting 1m0s before next try
2025-08-17T01:18:02.6223080Z 2025/08/17 00:47:08 [TRACE] Waiting 10s before next try
2025-08-17T01:18:02.6223681Z 2025/08/17 00:47:18 [TRACE] Waiting 1m0s before next try
2025-08-17T01:18:02.6224273Z 2025/08/17 00:48:18 [TRACE] Waiting 10s before next try
2025-08-17T01:18:02.6224869Z 2025/08/17 00:48:29 [TRACE] Waiting 1m0s before next try
2025-08-17T01:18:02.6225463Z 2025/08/17 00:49:29 [TRACE] Waiting 10s before next try
2025-08-17T01:18:02.6226170Z 2025/08/17 00:49:39 [TRACE] Waiting 1m0s before next try
2025-08-17T01:18:02.6226768Z 2025/08/17 00:50:39 [TRACE] Waiting 10s before next try
2025-08-17T01:18:02.6227362Z 2025/08/17 00:50:49 [TRACE] Waiting 1m0s before next try
2025-08-17T01:18:02.6228192Z 2025/08/17 00:51:49 [TRACE] Waiting 10s before next try
2025-08-17T01:18:02.6228981Z 2025/08/17 00:52:00 [TRACE] Waiting 1m0s before next try
2025-08-17T01:18:02.6229589Z 2025/08/17 00:53:00 [TRACE] Waiting 10s before next try
2025-08-17T01:18:02.6276415Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-08-17T01:18:02.6467386Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-08-17T01:18:02.6468476Z     resource_stream_connection_migration_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-08-17T01:18:02.6469473Z         
2025-08-17T01:18:02.6469940Z         Error: error creating resource
2025-08-17T01:18:02.6470398Z         
2025-08-17T01:18:02.6470978Z           with mongodbatlas_stream_connection.test,
2025-08-17T01:18:02.6472149Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2025-08-17T01:18:02.6473217Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2025-08-17T01:18:02.6473763Z         
2025-08-17T01:18:02.6475140Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122d8aafa9a76ca8bc085/streams/test-acc-tf-s-6508215644362021561/connections
2025-08-17T01:18:02.6476688Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T01:18:02.6477728Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T01:18:02.6478416Z         BadRequestDetail: 
2025-08-17T01:18:02.6490738Z    test_working_directory=/tmp/plugintest1745312972 test_step_number=1
2025-08-17T01:18:02.6503485Z --- FAIL: TestMigStreamRSStreamConnection_cluster (1337.95s)
```

- 2025-08-18
  - PASS 11 minutes
  - PASS 8 minutes
- 2025-08-19 PASS 11 minutes
- 2025-08-20
  - PASS 8 minutes
  - PASS 14 minutes
- 2025-08-21 PASS 11 minutes
- 2025-08-22 PASS 9 minutes
- 2025-08-23 PASS 11 minutes
- 2025-08-24 PASS 10 minutes
- 2025-08-25 PASS 11 minutes
- 2025-08-26 PASS 12 minutes
- 2025-08-27 PASS 13 minutes
- 2025-08-28 PASS 11 minutes
- 2025-08-29
  - PASS 21 minutes
  - PASS 8 minutes
- 2025-08-30 PASS 11 minutes
- 2025-08-31 PASS 18 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.8459161Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-09-01T00:30:38.8460345Z     resource_stream_connection_migration_test.go:17: Creating execution project: test-acc-tf-p-1946451636043274908
2025-09-01T00:30:38.8461379Z     resource_stream_connection_migration_test.go:17: 
2025-09-01T00:30:38.8463022Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.8466083Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.8469600Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:120
2025-09-01T00:30:38.8473164Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:189
2025-09-01T00:30:38.8477227Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_migration_test.go:17
2025-09-01T00:30:38.8479458Z         	            				/opt/hostedtoolcache/go/1.24.6/x64/src/runtime/asm_amd64.s:1700
2025-09-01T00:30:38.8480267Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.8485102Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8487919Z         	Test:       	TestMigStreamRSStreamConnection_cluster
2025-09-01T00:30:38.8491858Z         	Messages:   	Project creation failed: test-acc-tf-p-1946451636043274908, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8494417Z --- FAIL: TestMigStreamRSStreamConnection_cluster (0.15s)
```

  - FAIL an hour

### Error 2025-09-01T07:26:31+00:00
```
2025-09-01T07:26:31.9603901Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-09-01T07:26:31.9604572Z     resource_stream_connection_migration_test.go:17: Creating execution cluster: test-acc-tf-c-8628074616305267868
2025-09-01T07:26:31.9605142Z 2025/09/01 05:58:20 [DEBUG] Waiting for state to become: [IDLE]
2025-09-01T07:26:31.9605519Z 2025/09/01 06:01:20 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9605868Z 2025/09/01 06:02:21 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9606215Z 2025/09/01 06:02:31 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9606553Z 2025/09/01 06:03:31 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9606887Z 2025/09/01 06:03:41 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9607228Z 2025/09/01 06:04:41 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9607581Z 2025/09/01 06:04:51 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9607918Z 2025/09/01 06:05:51 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9608257Z 2025/09/01 06:06:01 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9608592Z 2025/09/01 06:07:02 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9608923Z 2025/09/01 06:07:12 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9609252Z 2025/09/01 06:08:12 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9609578Z 2025/09/01 06:08:22 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9609922Z 2025/09/01 06:09:22 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9610261Z 2025/09/01 06:09:32 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9610594Z 2025/09/01 06:10:32 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9610930Z 2025/09/01 06:10:43 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9611479Z 2025/09/01 06:11:43 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9611822Z 2025/09/01 06:11:53 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9612232Z 2025/09/01 06:12:53 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9612567Z 2025/09/01 06:13:03 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9612892Z 2025/09/01 06:14:03 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9613220Z 2025/09/01 06:14:13 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9613548Z 2025/09/01 06:15:13 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9613874Z 2025/09/01 06:15:23 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9614196Z 2025/09/01 06:16:24 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9614525Z 2025/09/01 06:16:34 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9614847Z 2025/09/01 06:17:34 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9615172Z 2025/09/01 06:17:44 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9615676Z 2025/09/01 06:18:44 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9616024Z 2025/09/01 06:18:54 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9616355Z 2025/09/01 06:19:54 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9616689Z 2025/09/01 06:20:04 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9617018Z 2025/09/01 06:21:05 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9617344Z 2025/09/01 06:21:15 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9617668Z 2025/09/01 06:22:15 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9618000Z 2025/09/01 06:22:25 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9618328Z 2025/09/01 06:23:25 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9618653Z 2025/09/01 06:23:35 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9618981Z 2025/09/01 06:24:35 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9619308Z 2025/09/01 06:24:45 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9619644Z 2025/09/01 06:25:46 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9619976Z 2025/09/01 06:25:56 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9620304Z 2025/09/01 06:26:56 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9620771Z 2025/09/01 06:27:06 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9621378Z 2025/09/01 06:28:06 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9621736Z 2025/09/01 06:28:16 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9622074Z 2025/09/01 06:29:16 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9622409Z 2025/09/01 06:29:26 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9622754Z 2025/09/01 06:30:27 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9623096Z 2025/09/01 06:30:37 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9623438Z 2025/09/01 06:31:37 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9623774Z 2025/09/01 06:31:47 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9624109Z 2025/09/01 06:32:47 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9624439Z 2025/09/01 06:32:57 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9624773Z 2025/09/01 06:33:57 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9625108Z 2025/09/01 06:34:07 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9625436Z 2025/09/01 06:35:08 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9625768Z 2025/09/01 06:35:18 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9626095Z 2025/09/01 06:36:18 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9626422Z 2025/09/01 06:36:28 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9626749Z 2025/09/01 06:37:28 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9627083Z 2025/09/01 06:37:38 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9627408Z 2025/09/01 06:38:38 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9627741Z 2025/09/01 06:38:49 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9628082Z 2025/09/01 06:39:49 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9628409Z 2025/09/01 06:39:59 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9628739Z 2025/09/01 06:40:59 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9629069Z 2025/09/01 06:41:09 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9629400Z 2025/09/01 06:42:09 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9629726Z 2025/09/01 06:42:19 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9630052Z 2025/09/01 06:43:19 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9630382Z 2025/09/01 06:43:29 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9630707Z 2025/09/01 06:44:30 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9631218Z 2025/09/01 06:44:40 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9631599Z 2025/09/01 06:45:40 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9631932Z 2025/09/01 06:45:50 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9632403Z 2025/09/01 06:46:50 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9632744Z 2025/09/01 06:47:00 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9633083Z 2025/09/01 06:48:00 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9633416Z 2025/09/01 06:48:10 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9633739Z 2025/09/01 06:49:11 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9634065Z 2025/09/01 06:49:21 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9634393Z 2025/09/01 06:50:21 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9634724Z 2025/09/01 06:50:31 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9635065Z 2025/09/01 06:51:31 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9635402Z 2025/09/01 06:51:41 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9635728Z 2025/09/01 06:52:41 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9636053Z 2025/09/01 06:52:51 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9636383Z 2025/09/01 06:53:52 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9636717Z 2025/09/01 06:54:02 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9637041Z 2025/09/01 06:55:02 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9637504Z 2025/09/01 06:55:12 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9637840Z 2025/09/01 06:56:12 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9638165Z 2025/09/01 06:56:22 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9638488Z 2025/09/01 06:57:22 [TRACE] Waiting 10s before next try
2025-09-01T07:26:31.9638813Z 2025/09/01 06:57:32 [TRACE] Waiting 1m0s before next try
2025-09-01T07:26:31.9639167Z 2025/09/01 06:58:20 [WARN] WaitForState timeout after 1h0m0s
2025-09-01T07:26:31.9639565Z 2025/09/01 06:58:20 [WARN] WaitForState starting 30s refresh grace period
2025-09-01T07:26:31.9640047Z     resource_stream_connection_migration_test.go:17: 
2025-09-01T07:26:31.9641117Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-09-01T07:26:31.9642829Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:130
2025-09-01T07:26:31.9644768Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:189
2025-09-01T07:26:31.9646896Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_migration_test.go:17
2025-09-01T07:26:31.9647748Z         	Error:      	Received unexpected error:
2025-09-01T07:26:31.9648634Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T07:26:31.9649213Z         	Test:       	TestMigStreamRSStreamConnection_cluster
2025-09-01T07:26:31.9650224Z         	Messages:   	Cluster creation failed: test-acc-tf-c-8628074616305267868, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T07:26:31.9650933Z --- FAIL: TestMigStreamRSStreamConnection_cluster (3600.55s)
```

  - PASS 20 minutes
  - PASS 11 minutes
  - PASS 10 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 11 minutes
- 2025-09-02 PASS 11 minutes
- 2025-09-03 PASS 18 minutes
- 2025-09-04 PASS 15 minutes