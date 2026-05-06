# config/projectapikey/TestAccProjectAPIKey_changingSingleProject Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 35 seconds
- 2026-04-08 PASS 34 seconds
- 2026-04-09 PASS a minute
- 2026-04-10 PASS 32 seconds
- 2026-04-11 PASS a minute
- 2026-04-12: MISSING
- 2026-04-13 PASS 31 seconds
- 2026-04-14 PASS 32 seconds
- 2026-04-15 PASS 46 seconds
- 2026-04-16 PASS 42 seconds
- 2026-04-17 PASS 55 seconds
- 2026-04-18 PASS 42 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 46 seconds
- 2026-04-21 PASS 39 seconds
- 2026-04-22 PASS 29 seconds
- 2026-04-23 PASS 44 seconds
- 2026-04-24 PASS 46 seconds
- 2026-04-25 PASS 45 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 41 seconds
- 2026-04-28 PASS 43 seconds
- 2026-04-29 PASS 54 seconds
- 2026-04-30 PASS a minute
- 2026-05-01 PASS 32 seconds
- 2026-05-02 PASS 35 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 30 seconds
- 2026-05-05 PASS 49 seconds
- 2026-05-06 PASS 44 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-22 07:18](#error-2026-04-22t0718180000) | RATE_LIMITED_TOKEN_BUCKET /api/atlas/v2/orgs | qa | 22.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 42 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 33 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 28 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - FAIL 22 seconds

### Error 2026-04-22T07:18:18+00:00
```
2026-04-22T07:18:18.6408108Z === RUN   TestAccProjectAPIKey_changingSingleProject
2026-04-22T07:18:18.6418436Z === CONT  TestAccProjectAPIKey_changingSingleProject
2026-04-22T07:18:18.6447446Z === NAME  TestAccProjectAPIKey_changingSingleProject
2026-04-22T07:18:18.6448159Z     resource_project_api_key_test.go:65: Step 4/4 error: Error running post-apply refresh plan: exit status 1
2026-04-22T07:18:18.6448867Z         
2026-04-22T07:18:18.6451451Z         Error: error getting api key information: https://cloud-qa.mongodb.com/api/atlas/v2/orgs GET: HTTP 429 Too Many Requests (Error code: "RATE_LIMITED_TOKEN_BUCKET") Detail: Rate limit exceeded for api/atlas/v2/orgs. Please retry after 19 seconds. Request capacity: 300. Refill rate: 100 per 60 seconds. Reason: Too Many Requests. Params: [api/atlas/v2/orgs 19 300 100 60], BadRequestDetail: 
2026-04-22T07:18:18.6453463Z         
2026-04-22T07:18:18.6453884Z           with data.mongodbatlas_project_api_key.test,
2026-04-22T07:18:18.6454733Z           on terraform_plugin_test.tf line 26, in data "mongodbatlas_project_api_key" "test":
2026-04-22T07:18:18.6455377Z           26: 			data "mongodbatlas_project_api_key" "test" {
2026-04-22T07:18:18.6455827Z         
2026-04-22T07:18:18.6467000Z    test_name=TestAccProjectAPIKey_changingSingleProject
2026-04-22T07:18:18.6467670Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-22T07:18:18.6468152Z         
2026-04-22T07:18:18.6470058Z         Error: https://cloud-qa.mongodb.com/api/atlas/v2/orgs GET: HTTP 429 Too Many Requests (Error code: "RATE_LIMITED_TOKEN_BUCKET") Detail: Rate limit exceeded for api/atlas/v2/orgs. Please retry after 18 seconds. Request capacity: 300. Refill rate: 100 per 60 seconds. Reason: Too Many Requests. Params: [api/atlas/v2/orgs 18 300 100 60], BadRequestDetail: 
2026-04-22T07:18:18.6471765Z         
2026-04-22T07:18:18.6472070Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (22.45s)
```

  - PASS 27 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 32 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 34 seconds
- 2026-05-04 PASS 44 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 48 seconds
