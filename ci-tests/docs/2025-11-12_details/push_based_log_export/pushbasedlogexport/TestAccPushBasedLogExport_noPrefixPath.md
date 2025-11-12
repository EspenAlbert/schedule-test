# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_noPrefixPath Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-07 00:31](#error-2025-11-07t0031040000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/690d3d0aa78815557f586d72/cloudProviderAccess/690d3dcfb092065c921264d2 | dev | 22.03s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 56 seconds
- 2025-10-05 PASS 51 seconds
- 2025-10-06 PASS 55 seconds
- 2025-10-07 PASS 50 seconds
- 2025-10-08 PASS 57 seconds
- 2025-10-09 PASS 51 seconds
- 2025-10-10 PASS 53 seconds
- 2025-10-11 PASS 56 seconds
- 2025-10-12 PASS 56 seconds
- 2025-10-13 PASS 56 seconds
- 2025-10-14 PASS 55 seconds
- 2025-10-15 PASS 56 seconds
- 2025-10-16 PASS 58 seconds
- 2025-10-17 PASS 52 seconds
- 2025-10-18 PASS 55 seconds
- 2025-10-19 PASS 54 seconds
- 2025-10-20
  - PASS 54 seconds
  - PASS 50 seconds
- 2025-10-21 PASS 52 seconds
- 2025-10-22
  - PASS 58 seconds
  - PASS 53 seconds
- 2025-10-23 PASS 51 seconds
- 2025-10-24 PASS 57 seconds
- 2025-10-25 PASS 55 seconds
- 2025-10-26 PASS 57 seconds
- 2025-10-27 PASS 52 seconds
- 2025-10-28 PASS 53 seconds
- 2025-10-29 PASS 53 seconds
- 2025-10-30 PASS 56 seconds
- 2025-10-31 PASS 53 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 50 seconds
- 2025-11-03 PASS 56 seconds
- 2025-11-04 PASS 53 seconds
- 2025-11-05
  - PASS 52 seconds
  - PASS 53 seconds
- 2025-11-06 PASS 52 seconds
- 2025-11-07

### Error 2025-11-07T00:31:04+00:00
```
2025-11-07T00:31:04.6130216Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2025-11-07T00:31:11.9746454Z 2025/11/07 00:31:11 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/690d3d0aa78815557f586d72/cloudProviderAccess/690d3dcfb092065c921264d2 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8858070128505438848-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8858070128505438848-policy], BadRequestDetail:  
2025-11-07T00:31:11.9748479Z 2025/11/07 00:31:11 retrying
2025-11-07T00:31:22.5109063Z    test_step_number=1 test_name=TestAccPushBasedLogExport_noPrefixPath test_terraform_path=/home/runner/work/_temp/21be4709-2961-4ad8-a6dd-e70c7b4a4c7f/terraform test_working_directory=/tmp/plugintest1069146945
2025-11-07T00:31:22.5112042Z     resource_test.go:68: Step 1/1 error: Error running apply: exit status 1
2025-11-07T00:31:22.5112646Z         
2025-11-07T00:31:22.5113360Z         Error: Error when creating push-based log export configuration
2025-11-07T00:31:22.5113929Z         
2025-11-07T00:31:22.5114535Z           with mongodbatlas_push_based_log_export.test,
2025-11-07T00:31:22.5115690Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export" "test":
2025-11-07T00:31:22.5116635Z          146: 			   resource "mongodbatlas_push_based_log_export" "test" {
2025-11-07T00:31:22.5116992Z         
2025-11-07T00:31:22.5117580Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690d3d0aa78815557f586d72/pushBasedLogExport
2025-11-07T00:31:22.5118299Z         POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas
2025-11-07T00:31:22.5118772Z         cannot assume the specified role
2025-11-07T00:31:22.5119717Z         ([arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8858070128505438848-policy]).
2025-11-07T00:31:22.5120222Z         Reason: Bad Request. Params:
2025-11-07T00:31:22.5121048Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8858070128505438848-policy]],
2025-11-07T00:31:22.5121523Z         BadRequestDetail: 
2025-11-07T00:31:26.9318420Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (22.32s)
```

- 2025-11-08 PASS 54 seconds
- 2025-11-09 PASS 52 seconds
- 2025-11-10 PASS 53 seconds
- 2025-11-11 PASS 56 seconds
- 2025-11-12 PASS 50 seconds