# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 01:35](#error-2026-01-31t0135100000) |  | dev | timeout | 3600.08s
[2026-02-02 02:38](#error-2026-02-02t0238320000) |  | dev | timeout | 3600.06s
[2026-02-03 00:39](#error-2026-02-03t0039210000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5b2e54ee995902674/clusters | dev | out_of_capacity | 0.05s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS a moment
- 2026-01-27 PASS a moment
- 2026-01-28 PASS a moment
- 2026-01-29 PASS a moment
- 2026-01-30 PASS a moment
- 2026-01-31

### Error 2026-01-31T01:35:10+00:00
```
2026-01-31T01:35:10.6656916Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2026-01-31T01:35:10.6657596Z     resource_test.go:66: Creating execution cluster: test-acc-tf-c-5685926366647324616
2026-01-31T01:35:11.4868373Z 2026/01/31 01:35:11 [DEBUG] Waiting for state to become: [IDLE]
2026-01-31T01:38:11.9443442Z 2026/01/31 01:38:11 [TRACE] Waiting 1m0s before next try
2026-01-31T01:39:12.3352368Z 2026/01/31 01:39:12 [TRACE] Waiting 10s before next try
2026-01-31T01:39:22.5608907Z 2026/01/31 01:39:22 [TRACE] Waiting 1m0s before next try
2026-01-31T01:40:22.9162202Z 2026/01/31 01:40:22 [TRACE] Waiting 10s before next try
2026-01-31T01:40:33.1572172Z 2026/01/31 01:40:33 [TRACE] Waiting 1m0s before next try
2026-01-31T01:41:33.5383463Z 2026/01/31 01:41:33 [TRACE] Waiting 10s before next try
2026-01-31T01:41:43.7710123Z 2026/01/31 01:41:43 [TRACE] Waiting 1m0s before next try
2026-01-31T01:42:44.1092625Z 2026/01/31 01:42:44 [TRACE] Waiting 10s before next try
2026-01-31T01:42:54.3544944Z 2026/01/31 01:42:54 [TRACE] Waiting 1m0s before next try
2026-01-31T01:43:54.7525611Z 2026/01/31 01:43:54 [TRACE] Waiting 10s before next try
2026-01-31T01:44:04.9979154Z 2026/01/31 01:44:04 [TRACE] Waiting 1m0s before next try
2026-01-31T01:45:05.3447787Z 2026/01/31 01:45:05 [TRACE] Waiting 10s before next try
2026-01-31T01:45:15.5736989Z 2026/01/31 01:45:15 [TRACE] Waiting 1m0s before next try
2026-01-31T01:46:15.9107527Z 2026/01/31 01:46:15 [TRACE] Waiting 10s before next try
2026-01-31T01:46:26.1502706Z 2026/01/31 01:46:26 [TRACE] Waiting 1m0s before next try
2026-01-31T01:47:26.5287589Z 2026/01/31 01:47:26 [TRACE] Waiting 10s before next try
2026-01-31T01:47:36.7595541Z 2026/01/31 01:47:36 [TRACE] Waiting 1m0s before next try
2026-01-31T01:48:37.2008591Z 2026/01/31 01:48:37 [TRACE] Waiting 10s before next try
2026-01-31T01:48:47.4243948Z 2026/01/31 01:48:47 [TRACE] Waiting 1m0s before next try
2026-01-31T01:49:47.7857541Z 2026/01/31 01:49:47 [TRACE] Waiting 10s before next try
2026-01-31T01:49:57.9983796Z 2026/01/31 01:49:57 [TRACE] Waiting 1m0s before next try
2026-01-31T01:50:58.3679630Z 2026/01/31 01:50:58 [TRACE] Waiting 10s before next try
2026-01-31T01:51:08.5779845Z 2026/01/31 01:51:08 [TRACE] Waiting 1m0s before next try
2026-01-31T01:52:08.9310033Z 2026/01/31 01:52:08 [TRACE] Waiting 10s before next try
2026-01-31T01:52:19.1416189Z 2026/01/31 01:52:19 [TRACE] Waiting 1m0s before next try
2026-01-31T01:53:19.5075859Z 2026/01/31 01:53:19 [TRACE] Waiting 10s before next try
2026-01-31T01:53:29.7329971Z 2026/01/31 01:53:29 [TRACE] Waiting 1m0s before next try
2026-01-31T01:54:30.1091094Z 2026/01/31 01:54:30 [TRACE] Waiting 10s before next try
2026-01-31T01:54:40.3235942Z 2026/01/31 01:54:40 [TRACE] Waiting 1m0s before next try
2026-01-31T01:55:40.6678923Z 2026/01/31 01:55:40 [TRACE] Waiting 10s before next try
2026-01-31T01:55:50.8968489Z 2026/01/31 01:55:50 [TRACE] Waiting 1m0s before next try
2026-01-31T01:56:51.3042828Z 2026/01/31 01:56:51 [TRACE] Waiting 10s before next try
2026-01-31T01:57:01.5498200Z 2026/01/31 01:57:01 [TRACE] Waiting 1m0s before next try
2026-01-31T01:58:01.8571476Z 2026/01/31 01:58:01 [TRACE] Waiting 10s before next try
2026-01-31T01:58:12.0987451Z 2026/01/31 01:58:12 [TRACE] Waiting 1m0s before next try
2026-01-31T01:59:12.4830599Z 2026/01/31 01:59:12 [TRACE] Waiting 10s before next try
2026-01-31T01:59:22.7182667Z 2026/01/31 01:59:22 [TRACE] Waiting 1m0s before next try
2026-01-31T02:00:23.1114721Z 2026/01/31 02:00:23 [TRACE] Waiting 10s before next try
2026-01-31T02:00:33.3411704Z 2026/01/31 02:00:33 [TRACE] Waiting 1m0s before next try
2026-01-31T02:01:33.6569530Z 2026/01/31 02:01:33 [TRACE] Waiting 10s before next try
2026-01-31T02:01:43.8963015Z 2026/01/31 02:01:43 [TRACE] Waiting 1m0s before next try
2026-01-31T02:02:44.2785155Z 2026/01/31 02:02:44 [TRACE] Waiting 10s before next try
2026-01-31T02:02:54.4998648Z 2026/01/31 02:02:54 [TRACE] Waiting 1m0s before next try
2026-01-31T02:03:54.8434498Z 2026/01/31 02:03:54 [TRACE] Waiting 10s before next try
2026-01-31T02:04:05.0655971Z 2026/01/31 02:04:05 [TRACE] Waiting 1m0s before next try
2026-01-31T02:05:05.4586982Z 2026/01/31 02:05:05 [TRACE] Waiting 10s before next try
2026-01-31T02:05:15.6978989Z 2026/01/31 02:05:15 [TRACE] Waiting 1m0s before next try
2026-01-31T02:06:16.0304292Z 2026/01/31 02:06:16 [TRACE] Waiting 10s before next try
2026-01-31T02:06:26.2445731Z 2026/01/31 02:06:26 [TRACE] Waiting 1m0s before next try
2026-01-31T02:07:26.5810846Z 2026/01/31 02:07:26 [TRACE] Waiting 10s before next try
2026-01-31T02:07:36.7965580Z 2026/01/31 02:07:36 [TRACE] Waiting 1m0s before next try
2026-01-31T02:08:37.1861391Z 2026/01/31 02:08:37 [TRACE] Waiting 10s before next try
2026-01-31T02:08:47.4370198Z 2026/01/31 02:08:47 [TRACE] Waiting 1m0s before next try
2026-01-31T02:09:47.7739594Z 2026/01/31 02:09:47 [TRACE] Waiting 10s before next try
2026-01-31T02:09:58.0140465Z 2026/01/31 02:09:58 [TRACE] Waiting 1m0s before next try
2026-01-31T02:10:58.4300489Z 2026/01/31 02:10:58 [TRACE] Waiting 10s before next try
2026-01-31T02:11:08.6552829Z 2026/01/31 02:11:08 [TRACE] Waiting 1m0s before next try
2026-01-31T02:12:09.0881549Z 2026/01/31 02:12:09 [TRACE] Waiting 10s before next try
2026-01-31T02:12:19.3554424Z 2026/01/31 02:12:19 [TRACE] Waiting 1m0s before next try
2026-01-31T02:13:19.7498021Z 2026/01/31 02:13:19 [TRACE] Waiting 10s before next try
2026-01-31T02:13:29.9825766Z 2026/01/31 02:13:29 [TRACE] Waiting 1m0s before next try
2026-01-31T02:14:30.3137015Z 2026/01/31 02:14:30 [TRACE] Waiting 10s before next try
2026-01-31T02:14:40.5220713Z 2026/01/31 02:14:40 [TRACE] Waiting 1m0s before next try
2026-01-31T02:15:41.1174050Z 2026/01/31 02:15:41 [TRACE] Waiting 10s before next try
2026-01-31T02:15:51.3650845Z 2026/01/31 02:15:51 [TRACE] Waiting 1m0s before next try
2026-01-31T02:16:51.7032841Z 2026/01/31 02:16:51 [TRACE] Waiting 10s before next try
2026-01-31T02:17:01.9664258Z 2026/01/31 02:17:01 [TRACE] Waiting 1m0s before next try
2026-01-31T02:18:02.4041641Z 2026/01/31 02:18:02 [TRACE] Waiting 10s before next try
2026-01-31T02:18:12.6176041Z 2026/01/31 02:18:12 [TRACE] Waiting 1m0s before next try
2026-01-31T02:19:12.9605807Z 2026/01/31 02:19:12 [TRACE] Waiting 10s before next try
2026-01-31T02:19:23.1958334Z 2026/01/31 02:19:23 [TRACE] Waiting 1m0s before next try
2026-01-31T02:20:23.5509798Z 2026/01/31 02:20:23 [TRACE] Waiting 10s before next try
2026-01-31T02:20:33.7890936Z 2026/01/31 02:20:33 [TRACE] Waiting 1m0s before next try
2026-01-31T02:21:34.1932122Z 2026/01/31 02:21:34 [TRACE] Waiting 10s before next try
2026-01-31T02:21:44.4131117Z 2026/01/31 02:21:44 [TRACE] Waiting 1m0s before next try
2026-01-31T02:22:44.7836960Z 2026/01/31 02:22:44 [TRACE] Waiting 10s before next try
2026-01-31T02:22:55.0093865Z 2026/01/31 02:22:55 [TRACE] Waiting 1m0s before next try
2026-01-31T02:23:55.3682343Z 2026/01/31 02:23:55 [TRACE] Waiting 10s before next try
2026-01-31T02:24:05.5982817Z 2026/01/31 02:24:05 [TRACE] Waiting 1m0s before next try
2026-01-31T02:25:05.9918643Z 2026/01/31 02:25:05 [TRACE] Waiting 10s before next try
2026-01-31T02:25:16.2289281Z 2026/01/31 02:25:16 [TRACE] Waiting 1m0s before next try
2026-01-31T02:26:16.5505920Z 2026/01/31 02:26:16 [TRACE] Waiting 10s before next try
2026-01-31T02:26:26.7922033Z 2026/01/31 02:26:26 [TRACE] Waiting 1m0s before next try
2026-01-31T02:27:27.2321028Z 2026/01/31 02:27:27 [TRACE] Waiting 10s before next try
2026-01-31T02:27:37.4703100Z 2026/01/31 02:27:37 [TRACE] Waiting 1m0s before next try
2026-01-31T02:28:37.7944575Z 2026/01/31 02:28:37 [TRACE] Waiting 10s before next try
2026-01-31T02:28:48.0301891Z 2026/01/31 02:28:48 [TRACE] Waiting 1m0s before next try
2026-01-31T02:29:48.3918482Z 2026/01/31 02:29:48 [TRACE] Waiting 10s before next try
2026-01-31T02:29:58.6138275Z 2026/01/31 02:29:58 [TRACE] Waiting 1m0s before next try
2026-01-31T02:30:58.9710880Z 2026/01/31 02:30:58 [TRACE] Waiting 10s before next try
2026-01-31T02:31:09.2087413Z 2026/01/31 02:31:09 [TRACE] Waiting 1m0s before next try
2026-01-31T02:32:09.5967101Z 2026/01/31 02:32:09 [TRACE] Waiting 10s before next try
2026-01-31T02:32:19.8318543Z 2026/01/31 02:32:19 [TRACE] Waiting 1m0s before next try
2026-01-31T02:33:20.1754818Z 2026/01/31 02:33:20 [TRACE] Waiting 10s before next try
2026-01-31T02:33:30.4098339Z 2026/01/31 02:33:30 [TRACE] Waiting 1m0s before next try
2026-01-31T02:34:30.7712399Z 2026/01/31 02:34:30 [TRACE] Waiting 10s before next try
2026-01-31T02:34:41.0194105Z 2026/01/31 02:34:41 [TRACE] Waiting 1m0s before next try
2026-01-31T02:35:11.4873884Z 2026/01/31 02:35:11 [WARN] WaitForState timeout after 1h0m0s
2026-01-31T02:35:11.4874958Z 2026/01/31 02:35:11 [WARN] WaitForState starting 30s refresh grace period
2026-01-31T02:35:11.4877755Z     resource_test.go:66: 
2026-01-31T02:35:11.4879117Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-31T02:35:11.4881676Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-31T02:35:11.4883907Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:66
2026-01-31T02:35:11.4884743Z         	Error:      	Received unexpected error:
2026-01-31T02:35:11.4885679Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T02:35:11.4886991Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2026-01-31T02:35:11.4888152Z         	Messages:   	Cluster creation failed: test-acc-tf-c-5685926366647324616, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-01-31T02:35:11.4888993Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime (3600.82s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T02:38:32+00:00
```
2026-02-02T02:38:32.0148474Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2026-02-02T02:38:32.0149520Z     resource_test.go:66: Creating execution cluster: test-acc-tf-c-6151903410578925352
2026-02-02T02:38:32.5934157Z 2026/02/02 02:38:32 [DEBUG] Waiting for state to become: [IDLE]
2026-02-02T02:41:32.7618630Z 2026/02/02 02:41:32 [TRACE] Waiting 1m0s before next try
2026-02-02T02:42:33.0786546Z 2026/02/02 02:42:33 [TRACE] Waiting 10s before next try
2026-02-02T02:42:43.2156952Z 2026/02/02 02:42:43 [TRACE] Waiting 1m0s before next try
2026-02-02T02:43:43.4944809Z 2026/02/02 02:43:43 [TRACE] Waiting 10s before next try
2026-02-02T02:43:53.6249140Z 2026/02/02 02:43:53 [TRACE] Waiting 1m0s before next try
2026-02-02T02:44:53.7720771Z 2026/02/02 02:44:53 [TRACE] Waiting 10s before next try
2026-02-02T02:45:03.8962397Z 2026/02/02 02:45:03 [TRACE] Waiting 1m0s before next try
2026-02-02T02:46:04.0368471Z 2026/02/02 02:46:04 [TRACE] Waiting 10s before next try
2026-02-02T02:46:14.1516241Z 2026/02/02 02:46:14 [TRACE] Waiting 1m0s before next try
2026-02-02T02:47:14.3287328Z 2026/02/02 02:47:14 [TRACE] Waiting 10s before next try
2026-02-02T02:47:24.4489683Z 2026/02/02 02:47:24 [TRACE] Waiting 1m0s before next try
2026-02-02T02:48:24.7039220Z 2026/02/02 02:48:24 [TRACE] Waiting 10s before next try
2026-02-02T02:48:34.8174355Z 2026/02/02 02:48:34 [TRACE] Waiting 1m0s before next try
2026-02-02T02:49:35.1968707Z 2026/02/02 02:49:35 [TRACE] Waiting 10s before next try
2026-02-02T02:49:45.3992639Z 2026/02/02 02:49:45 [TRACE] Waiting 1m0s before next try
2026-02-02T02:50:45.6136950Z 2026/02/02 02:50:45 [TRACE] Waiting 10s before next try
2026-02-02T02:50:55.7269838Z 2026/02/02 02:50:55 [TRACE] Waiting 1m0s before next try
2026-02-02T02:51:55.8818118Z 2026/02/02 02:51:55 [TRACE] Waiting 10s before next try
2026-02-02T02:52:05.9953003Z 2026/02/02 02:52:05 [TRACE] Waiting 1m0s before next try
2026-02-02T02:53:06.2140063Z 2026/02/02 02:53:06 [TRACE] Waiting 10s before next try
2026-02-02T02:53:16.3431063Z 2026/02/02 02:53:16 [TRACE] Waiting 1m0s before next try
2026-02-02T02:54:16.5102939Z 2026/02/02 02:54:16 [TRACE] Waiting 10s before next try
2026-02-02T02:54:26.6234764Z 2026/02/02 02:54:26 [TRACE] Waiting 1m0s before next try
2026-02-02T02:55:26.8411458Z 2026/02/02 02:55:26 [TRACE] Waiting 10s before next try
2026-02-02T02:55:36.9668111Z 2026/02/02 02:55:36 [TRACE] Waiting 1m0s before next try
2026-02-02T02:56:37.1084664Z 2026/02/02 02:56:37 [TRACE] Waiting 10s before next try
2026-02-02T02:56:47.2328447Z 2026/02/02 02:56:47 [TRACE] Waiting 1m0s before next try
2026-02-02T02:57:47.4058680Z 2026/02/02 02:57:47 [TRACE] Waiting 10s before next try
2026-02-02T02:57:57.5372583Z 2026/02/02 02:57:57 [TRACE] Waiting 1m0s before next try
2026-02-02T02:58:57.7674530Z 2026/02/02 02:58:57 [TRACE] Waiting 10s before next try
2026-02-02T02:59:07.8927019Z 2026/02/02 02:59:07 [TRACE] Waiting 1m0s before next try
2026-02-02T03:00:08.0624146Z 2026/02/02 03:00:08 [TRACE] Waiting 10s before next try
2026-02-02T03:00:18.1727930Z 2026/02/02 03:00:18 [TRACE] Waiting 1m0s before next try
2026-02-02T03:01:18.3886941Z 2026/02/02 03:01:18 [TRACE] Waiting 10s before next try
2026-02-02T03:01:28.5218724Z 2026/02/02 03:01:28 [TRACE] Waiting 1m0s before next try
2026-02-02T03:02:28.8549141Z 2026/02/02 03:02:28 [TRACE] Waiting 10s before next try
2026-02-02T03:02:38.9884442Z 2026/02/02 03:02:38 [TRACE] Waiting 1m0s before next try
2026-02-02T03:03:39.1941194Z 2026/02/02 03:03:39 [TRACE] Waiting 10s before next try
2026-02-02T03:03:49.3140452Z 2026/02/02 03:03:49 [TRACE] Waiting 1m0s before next try
2026-02-02T03:04:49.4600297Z 2026/02/02 03:04:49 [TRACE] Waiting 10s before next try
2026-02-02T03:04:59.5805475Z 2026/02/02 03:04:59 [TRACE] Waiting 1m0s before next try
2026-02-02T03:05:59.8476259Z 2026/02/02 03:05:59 [TRACE] Waiting 10s before next try
2026-02-02T03:06:09.9552349Z 2026/02/02 03:06:09 [TRACE] Waiting 1m0s before next try
2026-02-02T03:07:10.1878058Z 2026/02/02 03:07:10 [TRACE] Waiting 10s before next try
2026-02-02T03:07:20.3188320Z 2026/02/02 03:07:20 [TRACE] Waiting 1m0s before next try
2026-02-02T03:08:20.5268100Z 2026/02/02 03:08:20 [TRACE] Waiting 10s before next try
2026-02-02T03:08:30.6446229Z 2026/02/02 03:08:30 [TRACE] Waiting 1m0s before next try
2026-02-02T03:09:30.8922318Z 2026/02/02 03:09:30 [TRACE] Waiting 10s before next try
2026-02-02T03:09:41.0164978Z 2026/02/02 03:09:41 [TRACE] Waiting 1m0s before next try
2026-02-02T03:10:41.1924263Z 2026/02/02 03:10:41 [TRACE] Waiting 10s before next try
2026-02-02T03:10:51.3138304Z 2026/02/02 03:10:51 [TRACE] Waiting 1m0s before next try
2026-02-02T03:11:51.4692932Z 2026/02/02 03:11:51 [TRACE] Waiting 10s before next try
2026-02-02T03:12:01.5904878Z 2026/02/02 03:12:01 [TRACE] Waiting 1m0s before next try
2026-02-02T03:13:01.7234054Z 2026/02/02 03:13:01 [TRACE] Waiting 10s before next try
2026-02-02T03:13:11.8513252Z 2026/02/02 03:13:11 [TRACE] Waiting 1m0s before next try
2026-02-02T03:14:12.0084182Z 2026/02/02 03:14:12 [TRACE] Waiting 10s before next try
2026-02-02T03:14:22.1310186Z 2026/02/02 03:14:22 [TRACE] Waiting 1m0s before next try
2026-02-02T03:15:22.4303983Z 2026/02/02 03:15:22 [TRACE] Waiting 10s before next try
2026-02-02T03:15:32.5518779Z 2026/02/02 03:15:32 [TRACE] Waiting 1m0s before next try
2026-02-02T03:16:32.7470712Z 2026/02/02 03:16:32 [TRACE] Waiting 10s before next try
2026-02-02T03:16:42.8801229Z 2026/02/02 03:16:42 [TRACE] Waiting 1m0s before next try
2026-02-02T03:17:43.1069395Z 2026/02/02 03:17:43 [TRACE] Waiting 10s before next try
2026-02-02T03:17:53.2244525Z 2026/02/02 03:17:53 [TRACE] Waiting 1m0s before next try
2026-02-02T03:18:53.3655484Z 2026/02/02 03:18:53 [TRACE] Waiting 10s before next try
2026-02-02T03:19:03.4877666Z 2026/02/02 03:19:03 [TRACE] Waiting 1m0s before next try
2026-02-02T03:20:03.6480323Z 2026/02/02 03:20:03 [TRACE] Waiting 10s before next try
2026-02-02T03:20:13.7683435Z 2026/02/02 03:20:13 [TRACE] Waiting 1m0s before next try
2026-02-02T03:21:13.9182089Z 2026/02/02 03:21:13 [TRACE] Waiting 10s before next try
2026-02-02T03:21:24.0442560Z 2026/02/02 03:21:24 [TRACE] Waiting 1m0s before next try
2026-02-02T03:22:24.4002716Z 2026/02/02 03:22:24 [TRACE] Waiting 10s before next try
2026-02-02T03:22:34.5178016Z 2026/02/02 03:22:34 [TRACE] Waiting 1m0s before next try
2026-02-02T03:23:34.6894842Z 2026/02/02 03:23:34 [TRACE] Waiting 10s before next try
2026-02-02T03:23:44.7936040Z 2026/02/02 03:23:44 [TRACE] Waiting 1m0s before next try
2026-02-02T03:24:44.9428204Z 2026/02/02 03:24:44 [TRACE] Waiting 10s before next try
2026-02-02T03:24:55.0553722Z 2026/02/02 03:24:55 [TRACE] Waiting 1m0s before next try
2026-02-02T03:25:55.3664102Z 2026/02/02 03:25:55 [TRACE] Waiting 10s before next try
2026-02-02T03:26:05.4621290Z 2026/02/02 03:26:05 [TRACE] Waiting 1m0s before next try
2026-02-02T03:27:05.6202629Z 2026/02/02 03:27:05 [TRACE] Waiting 10s before next try
2026-02-02T03:27:15.7329651Z 2026/02/02 03:27:15 [TRACE] Waiting 1m0s before next try
2026-02-02T03:28:15.9000583Z 2026/02/02 03:28:15 [TRACE] Waiting 10s before next try
2026-02-02T03:28:26.0268545Z 2026/02/02 03:28:26 [TRACE] Waiting 1m0s before next try
2026-02-02T03:29:26.1616287Z 2026/02/02 03:29:26 [TRACE] Waiting 10s before next try
2026-02-02T03:29:36.2778347Z 2026/02/02 03:29:36 [TRACE] Waiting 1m0s before next try
2026-02-02T03:30:36.5074597Z 2026/02/02 03:30:36 [TRACE] Waiting 10s before next try
2026-02-02T03:30:46.6236505Z 2026/02/02 03:30:46 [TRACE] Waiting 1m0s before next try
2026-02-02T03:31:46.8431754Z 2026/02/02 03:31:46 [TRACE] Waiting 10s before next try
2026-02-02T03:31:56.9595685Z 2026/02/02 03:31:56 [TRACE] Waiting 1m0s before next try
2026-02-02T03:32:57.1714668Z 2026/02/02 03:32:57 [TRACE] Waiting 10s before next try
2026-02-02T03:33:07.2848604Z 2026/02/02 03:33:07 [TRACE] Waiting 1m0s before next try
2026-02-02T03:34:07.5480855Z 2026/02/02 03:34:07 [TRACE] Waiting 10s before next try
2026-02-02T03:34:17.6652437Z 2026/02/02 03:34:17 [TRACE] Waiting 1m0s before next try
2026-02-02T03:35:18.0137305Z 2026/02/02 03:35:18 [TRACE] Waiting 10s before next try
2026-02-02T03:35:28.1284443Z 2026/02/02 03:35:28 [TRACE] Waiting 1m0s before next try
2026-02-02T03:36:28.3132157Z 2026/02/02 03:36:28 [TRACE] Waiting 10s before next try
2026-02-02T03:36:38.4215783Z 2026/02/02 03:36:38 [TRACE] Waiting 1m0s before next try
2026-02-02T03:37:38.5733718Z 2026/02/02 03:37:38 [TRACE] Waiting 10s before next try
2026-02-02T03:37:48.6839595Z 2026/02/02 03:37:48 [TRACE] Waiting 1m0s before next try
2026-02-02T03:38:32.5937836Z 2026/02/02 03:38:32 [WARN] WaitForState timeout after 1h0m0s
2026-02-02T03:38:32.5943280Z 2026/02/02 03:38:32 [WARN] WaitForState starting 30s refresh grace period
2026-02-02T03:38:32.5944605Z     resource_test.go:66: 
2026-02-02T03:38:32.5946430Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-02-02T03:38:32.5950144Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-02-02T03:38:32.5954480Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:66
2026-02-02T03:38:32.5955793Z         	Error:      	Received unexpected error:
2026-02-02T03:38:32.5957508Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T03:38:32.5958373Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2026-02-02T03:38:32.5959802Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6151903410578925352, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-02-02T03:38:32.5960777Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime (3600.58s)
```

- 2026-02-03

### Error 2026-02-03T00:39:21+00:00
```
2026-02-03T00:39:21.4134276Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2026-02-03T00:39:21.4134885Z     resource_test.go:66: Creating execution cluster: test-acc-tf-c-3738416098505652252
2026-02-03T00:39:21.9205961Z     resource_test.go:66: 
2026-02-03T00:39:21.9207701Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:39:21.9210121Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:39:21.9212780Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:66
2026-02-03T00:39:21.9213906Z         	Error:      	Received unexpected error:
2026-02-03T00:39:21.9217145Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5b2e54ee995902674/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:21.9218653Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2026-02-03T00:39:21.9221008Z         	Messages:   	Cluster creation failed: test-acc-tf-c-3738416098505652252, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5b2e54ee995902674/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:21.9222941Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime (0.51s)
```

- 2026-02-04 PASS a moment
- 2026-02-05 PASS a moment
- 2026-02-06 PASS a moment
- 2026-02-07 PASS a moment
- 2026-02-08: MISSING
- 2026-02-09 PASS a moment
- 2026-02-10 PASS a moment
- 2026-02-11 PASS a moment
- 2026-02-12 PASS a moment
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

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS a moment
- 2026-02-02: MISSING
- 2026-02-03: MISSING
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
